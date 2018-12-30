import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import * as dialogActions from '../../components/common/dialog/actions';
import ListHeadline from '../movieList/dumbComponent/listHeadline'
import AddNewMovieReducer from './reducers/addNewMovieReducer';
import MyDialog from '../../components/common/dialog/MyDialog';
import EditMovieReducer from './reducers/editMovieReducer'
import ListItem from '../movieList/dumbComponent/listItem';
import * as actions from './action';
import './styles/style.less';


class movieList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.editMovieClick = this.editMovieClick.bind(this);
        this.deleteMovieClick = this.deleteMovieClick.bind(this);
        this.editMovieSubmit = this.editMovieSubmit.bind(this);
        this.addNewMovieClick = this.addNewMovieClick.bind(this);
        this.addNewMovieSubmit = this.addNewMovieSubmit.bind(this);
        this.deleteMovieSubmit = this.deleteMovieSubmit.bind(this);
    }
    componentDidMount() {
        const userList = this.props.movieList;
        const actions = this.props.actions;
        if(!_.size(userList)){
            actions.getMovieList();
        }
    }
    deleteMovieClick(movieId){
        const dialogActions = this.props.dialogActions;

        const params = {movieId};
        dialogActions.setDialogType('confirmation');
        dialogActions.showDialogActionBtn();
        dialogActions.changeBuText('Ok');
        dialogActions.changeNmberOfPage(0);
        dialogActions.setDialogTitle('Edit movie');
        dialogActions.changeBodyReducer('deleteMovie', params);
        dialogActions.openDialog();
        dialogActions.setsSubmitFunc(() => this.deleteMovieSubmit(movieId));
        // actions.initializeEditMovie(movieEdit)
    }
    editMovieClick(movieId){
        const dialogActions = this.props.dialogActions;
        const actions = this.props.actions;
        const params = {movieId: movieId};
        const movieList = this.props.movieList;
        dialogActions.showDialogActionBtn();
        dialogActions.changeBuText('Continue');
        dialogActions.changeNmberOfPage(0);
        dialogActions.setDialogTitle('Edit movie');
        dialogActions.changeBodyReducer('editMovie', params);
        dialogActions.openDialog();
        dialogActions.setsSubmitFunc(() => this.editMovieSubmit());
        // initialize edit reducer!
        const movieEdit = _.cloneDeep(_.find(movieList, (movie) => {
            return movie.id === movieId;
        }))
        actions.initializeEditMovie(movieEdit)
    }
    addNewMovieSubmit(){
        console.log("SUBMIT ADD MOVIE");
        const actions = this.props.actions;
        const dialogActions = this.props.dialogActions;
        actions.clearErrorTextForAdd();
        const movieList = this.props.movieList;
        const addNewMovie = this.props.addNewMovie;
        const errorText = {
            title: "",
            year: "",
            runtime: "",
            genre: "",
            director: ""
        };
        const newMovie = {
            title: addNewMovie.movieToAdd.title,
            year: addNewMovie.movieToAdd.year,
            runtime: addNewMovie.movieToAdd.runtime,
            genre: '',
            director: addNewMovie.movieToAdd.director
        };
        if(addNewMovie.genreSelect && addNewMovie.genreSelect.genreArray){
            _.forEach(addNewMovie.genreSelect.genreArray, (genre) => {
                if(genre.select){
                    if(_.size(newMovie.genre)){
                        newMovie.genre = newMovie.genre + ", "+genre.name;
                    }else{
                        newMovie.genre = newMovie.genre + genre.name;
                    }

                }
            });
        }

        const formatTitle =  newMovie.title.replace(/[^a-zA-Z ]/g, "");
        newMovie.title = formatTitle;

        let isValidNewMovie = true;

        /**
         * Check if valid title
         * */

        const existMovie = _.find(movieList, (movie) => {
            return movie.title.toLowerCase() === newMovie.title.toLowerCase()
        });

        if(_.size(existMovie)){
            isValidNewMovie = false;
            errorText.title = "that movie name already exist";
        }else if(!_.size(newMovie.title)){
            isValidNewMovie = false;
            errorText.title = "please select movie title";
        }

        /**
         * Check if valid year
         * */
        if(!newMovie.year || parseInt(newMovie.year) < 1878|| parseInt(newMovie.year) > 2019){
            isValidNewMovie = false;
            errorText.year = "please choose valid year";
        }
        /**
         * Check if valid run time
         * */
        if(!newMovie.runtime || parseInt(newMovie.runtime) < 1){
            isValidNewMovie = false;
            errorText.runtime = "please choose valid run time";
        }

        /**
         * Check if valid director
         * */
        if(!_.size(newMovie.director)){
            isValidNewMovie = false;
            errorText.director = "please choose director";
        }

        /**
         * Check if valid genre
         * */
        if(!_.size(newMovie.genre)){
            isValidNewMovie = false;
            errorText.genre = "please choose at least one genre";
        }
        if(!isValidNewMovie){
            actions.setErrorTextForAdd(errorText)
            // set error text!
        }else{
            // the validate is ok -> we can continue!
            actions.addNewMovie(newMovie);
            // Close dialog!
            dialogActions.closeDialog();
            // Init edit movie state!
            actions.clearNewMovie()
        }
    }
    deleteMovieSubmit(movieId){
        const actions = this.props.actions;
        const dialogActions = this.props.dialogActions;
        actions.deleteMovie(movieId)
        dialogActions.closeDialog();
    }
    editMovieSubmit(){
        const actions = this.props.actions;
        const dialogActions = this.props.dialogActions;
        actions.clearErrorTextForEdit();
        const movieList = this.props.movieList;
        const editMovie = this.props.editMovie;
        const errorText = {
            title: "",
            year: "",
            runtime: "",
            genre: "",
            director: ""
        };
        const newMovie = {
            title: editMovie.movieToEdit.title,
            year: editMovie.movieToEdit.year,
            runtime: editMovie.movieToEdit.runtime,
            genre: '',
            director: editMovie.movieToEdit.director,
            id: editMovie.movieToEdit.id
        };
        if(editMovie.genreSelect && editMovie.genreSelect.genreArray){
            _.forEach(editMovie.genreSelect.genreArray, (genre) => {
                if(genre.select){
                    if(_.size(newMovie.genre)){
                        newMovie.genre = newMovie.genre + ", "+genre.name;
                    }else{
                        newMovie.genre = newMovie.genre + genre.name;
                    }

                }
            });
        }

        const formatTitle =  newMovie.title.replace(/[^a-zA-Z ]/g, "");
        newMovie.title = formatTitle;

        let isValidNewMovie = true;
        /**
         * Check if valid title
         * */

        const existMovie = _.find(movieList, (movie) => {
            return movie.title.toLowerCase() === newMovie.title.toLowerCase() &&
                newMovie.id !== movie.id;
        });

        if(_.size(existMovie)){
            isValidNewMovie = false;
            errorText.title = "that movie name already exist";
        }else if(!_.size(newMovie.title)){
            isValidNewMovie = false;
            errorText.title = "please select movie title";
        }


        /**
         * Check if valid year
         * */
        if(!newMovie.year || parseInt(newMovie.year) < 1878|| parseInt(newMovie.year) > 2019){
            isValidNewMovie = false;
            errorText.year = "please choose valid year";
        }
        /**
         * Check if valid run time
         * */
        if(!newMovie.runtime || parseInt(newMovie.runtime) < 1){
            isValidNewMovie = false;
            errorText.runtime = "please choose valid run time";
        }
        /**
         * Check if valid director
         * */
        if(!_.size(newMovie.director)){
            isValidNewMovie = false;
            errorText.director = "please choose director";
        }

        /**
         * Check if valid genre
         * */
        if(!_.size(newMovie.genre)){
            isValidNewMovie = false;
            errorText.genre = "please choose at least one genre";
        }
        if(!isValidNewMovie){
            actions.setErrorTextForEdit(errorText)
            // set error text!
        }else{
            // the validate is ok -> we can continue!
            actions.changeMovie(newMovie);
            // Close dialog!
            dialogActions.closeDialog();
            // Init edit movie state!
            actions.clearEditMovie()
        }

    }
    addNewMovieClick(){
        const dialogActions = this.props.dialogActions;
        const params = {};
        dialogActions.showDialogActionBtn();
        dialogActions.changeBuText('Continue');
        dialogActions.changeNmberOfPage(0);
        dialogActions.setDialogTitle('Add New Movie');
        dialogActions.changeBodyReducer('addMovie', params);
        dialogActions.openDialog();
        dialogActions.setsSubmitFunc(() => this.addNewMovieSubmit());
    }

    render() {
        const movieList = _.cloneDeep(this.props.movieList);

        /**
         * Sort the movie list by name.
         * */
        const movieListSort = movieList.sort((a, b) => {
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;
            }
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            }
            0;
        });

        let movieListElements = <div></div>;

        if(_.size(movieListSort)){
            movieListElements = movieListSort.map((item)=>{

                const props = {
                    title: item.title,
                    year: item.year,
                    runTime: Number(item.runtime),
                    genre: item.genre,
                    director: item.director,
                    id: item.id
                };

                return <ListItem  title={props.title}
                                  id={props.id}
                                  key={item.id}
                                  year={props.year}
                                  runTime={props.runTime}
                                  genre={props.genre}
                                  director={props.director}
                                  deleteClick={() => {this.deleteMovieClick(props.id)}}
                                  editClick={this.editMovieClick}
                        />

            });
        }

        return (
            <div className="movie-component">
                <MyDialog/>
                <div className="movie-list">
                    <div className="my-box">
                        <ListHeadline addNewMovieClick={this.addNewMovieClick}/>
                        <div className="movie-table-wrapper">
                            {movieListElements}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

movieList.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        movieList: state.movieList.list,
        editMovie: state.editMovie,
        addNewMovie: state.addNewMovie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        dialogActions: bindActionCreators(dialogActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(movieList);
