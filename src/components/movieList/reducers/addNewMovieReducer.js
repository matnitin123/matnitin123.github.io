import * as types from '../constant/actionTypes';
import * as dialogTypes from "../../common/dialog/const/actionTypes";
import * as constants from "../../../common/constants";

const initializeState = {
    movieToAdd: {
        title: '',
        year: null,
        runtime: 0,
        director: ''
    },
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
export default function addNewMovieReducer(state = initializeState, action) {
    switch (action.type) {
        case types.INITIALIZE_STATE: {
            return initializeState;
        }
        case types.INITIALIZE_EDIT_MOVIE:{
            return initializeState;
        }
        case dialogTypes.CLOSE_DIALOG: {
            return initializeState
        }
        case types.CHANGE_NEW_MOVIE_FILED: {
            const field = action.field;
            const newVal = action.newVal;
            if(field === 'title' || field === 'year' || field === 'runtime'
                || field === 'director'){
                const movieToAdd = _.cloneDeep(state.movieToAdd);
                movieToAdd[field] = newVal;

                return Object.assign({}, state, {
                    movieToAdd
                });
            }
            return state;
        }
        case types.NEW_MOVIE_OPEN_GENRE_SELECT: {
            const genreSelect = _.cloneDeep(state.genreSelect);
            genreSelect.open = true;
            return Object.assign({}, state, {
                genreSelect
            });
        }
        case types.NEW_MOVIE_CHECK_GENRE: {
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
        case types.ADD_MOVIE_CLOSE_GENRE_SELECT:{
            const genreSelect = _.cloneDeep(state.genreSelect);
            genreSelect.open = false;
            return Object.assign({}, state, {
                genreSelect
            });
        }
        case types.CLEAR_ERROR_TEXT_FOR_ADD: {
            const movieToAdd = _.cloneDeep(state.movieToAdd);
            delete movieToAdd.titleError;
            delete movieToAdd.yearError;
            delete movieToAdd.runtimeError;
            delete movieToAdd.directorError;
            delete movieToAdd.genreError;
            return Object.assign({}, state, {
                movieToAdd
            });
        }
        case types.SET_ERROR_TEXT_FOR_ADD: {
            const movieToAdd = _.cloneDeep(state.movieToAdd);
            if(action.errors.title){
                movieToAdd.titleError = action.errors.title;
            }
            if(action.errors.year){
                movieToAdd.yearError = action.errors.year;
            }
            if(action.errors.runtime){
                movieToAdd.runtimeError = action.errors.runtime;
            }
            if(action.errors.director){
                movieToAdd.directorError = action.errors.director;
            }
            if(action.errors.genre){
                movieToAdd.genreError = action.errors.genre;
            }
            return Object.assign({}, state, {
                movieToAdd
            });
        }
        case types.CLEAR_NEW_MOVIE: {
            return initializeState;
        }
        default:
            return state;
    }
}
