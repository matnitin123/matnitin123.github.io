import * as types from './constant/actionTypes';
import movieApi from './movieApi';

export function initializeMovieList(list) {
    return {type: types.INITIALIZE_MOVIE_LIST, list: list};
}

export function getMovieList() {
    return dispatch => {
        dispatch(initializeMovieList([]));
        return movieApi.getMovieInitList() // This is return a promise!
            .then(response => {
                dispatch(initializeMovieList(response));
            }).catch(err => {
                /* eslint-disable no-console*/
                if(err){
                    console.log("clinic data: error: ", err);
                }
            });
    };
}


///// EDIT_MOVIE_REDUCER
export function initializeEditMovie(movie) {
    return {type: types.INITIALIZE_EDIT_MOVIE, movie};
}
export function clearEditMovie() {
    return {type: types.CLEAR_EDIT_MOVIE};
}
export function changeEditInputFiled(field, newVal) {
    return {type: types.CHANGE_EDIT_MOVIE_FILED, field, newVal};
}

export function editOpenGenreSelectOption() {
    return {type: types.EDIT_MOVIE_OPEN_GENRE_SELECT, payload: {}};
}
export function editCloseGenreSelectOption() {
    return {type: types.EDIT_MOVIE_CLOSE_GENRE_SELECT, payload: {}};
}
export function genreEditSelect(name) {
    return {type: types.EDIT_MOVIE_CHECK_GENRE, name};
}

export function setErrorTextForEdit(errors) {
    return {type: types.SET_ERROR_TEXT_FOR_EDIT, errors};
}
export function clearErrorTextForEdit() {
    return {type: types.CLEAR_ERROR_TEXT_FOR_EDIT, payload: {}};
}
export function changeMovie(movie){
    return {type: types.CHANGE_MOVIE_FROM_LIST, movie};
}
export function addNewMovie(movie){
    return {type: types.ADD_NEW_MOVIE_TO_LIST, movie};
}
export function deleteMovie(movieId){
    return {type: types.DELETE_MOVIE_FROM_LIST, movieId};
}
// Add new movie
export function changeNewInputFiled(field, newVal) {
    return {type: types.CHANGE_NEW_MOVIE_FILED, field, newVal};
}
export function newOpenGenreSelectOption() {
    return {type: types.NEW_MOVIE_OPEN_GENRE_SELECT, payload: {}};
}
export function genreNewSelect(name) {
    return {type: types.NEW_MOVIE_CHECK_GENRE, name};
}
export function addCloseGenreSelectOption() {
    return {type: types.ADD_MOVIE_CLOSE_GENRE_SELECT, payload: {}};
}
export function clearErrorTextForAdd() {
    return {type: types.CLEAR_ERROR_TEXT_FOR_ADD, payload: {}};
}
export function setErrorTextForAdd(errors) {
    return {type: types.SET_ERROR_TEXT_FOR_ADD, errors};
}
export function clearNewMovie() {
    return {type: types.CLEAR_NEW_MOVIE};
}
