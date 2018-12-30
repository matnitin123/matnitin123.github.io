import _ from 'lodash';
import * as types from '../constant/actionTypes';
import * as dialogTypes from '../../common/dialog/const/actionTypes';
import * as constants from '../../../common/constants';

const initializeState = {
    movieToEdit: {},
    genreSelect: {
        open: false,
        genreArray: constants.GENRE_ARRAY.map((item) => {
            return {
                name: item,
                select: false
            }
        })
    }
};
export default function editMovieReducer(state = initializeState, action) {
    switch (action.type) {
        case types.INITIALIZE_STATE: {
            return initializeState;
        }
        case types.INITIALIZE_EDIT_MOVIE: {

            const genreSelect = _.cloneDeep(state.genreSelect);
            const genreArrayState = genreSelect.genreArray;
            const genreArray = action.movie.genre.split(', ');
            _.forEach(genreArray, (genre) => {
                const selectGenre = _.find(genreArrayState, (item) => {
                    return item.name ===  genre
                });
                if(selectGenre){
                    selectGenre.select = true;
                }
            });


            const movieToEdit = {
                "title": action.movie.title,
                "year": action.movie.year,
                "runtime": action.movie.runtime,
                "director": action.movie.director,
                "id": action.movie.id
            };
            return Object.assign({}, state, {
                movieToEdit,
                genreSelect
            });
        }
        case types.CLEAR_EDIT_MOVIE: {
            return initializeState;
        }
        case dialogTypes.CLOSE_DIALOG: {
            return initializeState;
        }
        case types.CHANGE_EDIT_MOVIE_FILED: {
            const field = action.field;
            const newVal = action.newVal;
            if(field === 'title' || field === 'year' || field === 'runtime'
                || field === 'director'){
                const movieToEdit = _.cloneDeep(state.movieToEdit);
                movieToEdit[field] = newVal;

                return Object.assign({}, state, {
                    movieToEdit
                });
            }
            return state;



        }
        case types.EDIT_MOVIE_OPEN_GENRE_SELECT: {
            const genreSelect = _.cloneDeep(state.genreSelect);
            genreSelect.open = true;
            return Object.assign({}, state, {
                genreSelect
            });
        }
        case types.EDIT_MOVIE_CLOSE_GENRE_SELECT: {
            const genreSelect = _.cloneDeep(state.genreSelect);
            genreSelect.open = false;
            return Object.assign({}, state, {
                genreSelect
            });
        }
        case types.EDIT_MOVIE_CHECK_GENRE: {
            const genreClickName = action.name;
            const genreSelect = _.cloneDeep(state.genreSelect);
            const genreArray = genreSelect.genreArray;
            const theGenreClick = _.find(genreArray, (item) => {
                return item.name === genreClickName;
            });
            if(theGenreClick){
                theGenreClick.select = !theGenreClick.select;
            }
            return Object.assign({}, state, {
                genreSelect
            });
        }
        case types.SET_ERROR_TEXT_FOR_EDIT: {
            // titleError, yearError, runtimeError, genreError, directorError
            const movieToEdit = _.cloneDeep(state.movieToEdit);
            if(action.errors.title){
                movieToEdit.titleError = action.errors.title;
            }
            if(action.errors.year){
                movieToEdit.yearError = action.errors.year;
            }
            if(action.errors.runtime){
                movieToEdit.runtimeError = action.errors.runtime;
            }
            if(action.errors.director){
                movieToEdit.directorError = action.errors.director;
            }
            if(action.errors.genre){
                movieToEdit.genreError = action.errors.genre;
            }
            return Object.assign({}, state, {
                movieToEdit
            });
        }
        case types.CLEAR_ERROR_TEXT_FOR_EDIT: {
            const movieToEdit = _.cloneDeep(state.movieToEdit);
            delete movieToEdit.titleError;
            delete movieToEdit.yearError;
            delete movieToEdit.runtimeError;
            delete movieToEdit.directorError;
            delete movieToEdit.genreError;
            return Object.assign({}, state, {
                movieToEdit
            });
        }
        default:
            return state;
    }

}
