import {combineReducers} from 'redux';
import movieList from './components/movieList/reducers/movieListReducer';
import editMovie from './components/movieList/reducers/editMovieReducer';
import addNewMovie from './components/movieList/reducers/addNewMovieReducer';
import dialogReducer from './components/common/dialog/reducers/dialogReducer';

const rootReducer = combineReducers({
    movieList,
    addNewMovie,
    editMovie,
    dialogReducer
});

export default rootReducer;