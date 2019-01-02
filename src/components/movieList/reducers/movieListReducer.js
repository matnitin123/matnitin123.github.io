import * as types from '../constant/actionTypes';
import _ from 'lodash';

const initializeState = {
    list: [],
    lastId: 0
};
export default function movieListReducer(state = initializeState, action) {
    switch (action.type) {
        case types.INITIALIZE_STATE: {
            return initializeState;
        }
        case types.INITIALIZE_MOVIE_LIST: {

            const listWithId = [];

            let lastId = _.cloneDeep(state.lastId);

            _.forEach(action.list, (item) => {
                lastId++;
                const newItem = _.cloneDeep(item);
                newItem.id = lastId;
                listWithId.push(newItem);
            });

            return Object.assign({}, state, {
                list: listWithId,
                lastId
            });
        }
        case types.CHANGE_MOVIE_FROM_LIST: {
            const list = _.cloneDeep(state.list);
            const selectMovie = _.find(list, (item) => {
                return item.id === action.movie.id;
            });
            if(!_.size(selectMovie)){
                return state;
            }
            selectMovie.title = action.movie.title;
            selectMovie.year = action.movie.year;
            selectMovie.runtime = action.movie.runtime;
            selectMovie.director = action.movie.director;
            selectMovie.genre = action.movie.genre;
            return Object.assign({}, state, {
                list
            });

        }
        case types.ADD_NEW_MOVIE_TO_LIST: {
            const list = _.cloneDeep(state.list);
            const newMovie = {
                "title": action.movie.title,
                "year": action.movie.year,
                "runtime": action.movie.runtime,
                "genre": action.movie.genre,
                "director": action.movie.director,
                "id": state.lastId+1
            };
            list.push(newMovie);
            return Object.assign({}, state, {
                list,
                lastId: state.lastId+1
            });

        }
        case types.DELETE_MOVIE_FROM_LIST: {
            const movieId = action.movieId;
            const list = _.cloneDeep(state.list);
            _.remove(list, (item) => {
                return item.id === movieId;
            })
            return Object.assign({}, state, {
                list
            });

        }
        default:
            return state;
    }
}
