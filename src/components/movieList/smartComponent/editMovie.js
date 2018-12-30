import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from 'material-ui/TextField';
import * as actions from '../action';
import CheckBox from '../../common/checkBox/checkBox';

import GenreMenu from '../smartComponent/genreMenu';

class editMovie extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.openSelectGenre = this.openSelectGenre.bind(this);
        this.onCheckGenre = this.onCheckGenre.bind(this);
    }
    /**
     * Change handler for input field (title, yea, runtime, director)
     * */
    onChange(event) {
        const field = event.target.name;
        const actions = this.props.actions;
        const newVal = event.target.value;
        actions.changeEditInputFiled(field, newVal);
    }
    /**
     * Click on genre input field --> open the menu
     * */
    openSelectGenre(){
        const actions = this.props.actions;
        actions.editOpenGenreSelectOption();
    }

    /**
     * Click on one of genre checkbox.
     * */
    onCheckGenre(name){
        const actions = this.props.actions;
        actions.genreEditSelect(name);
    };



    render() {
        const editMovie = this.props.editMovie.movieToEdit;
        const genreSelect = this.props.editMovie.genreSelect;
        const genreSelectOpen = genreSelect.open;
        const genreSelectArray = genreSelect.genreArray;

        // Init the value and the error text for every field.
        const editTitle = editMovie.title;
        const editTitleError = editMovie.titleError;

        const editYear = editMovie.year;
        const editYearError = editMovie.yearError;

        const editRunTime = editMovie.runtime;
        const editRunTimeError = editMovie.runtimeError;

        const editGenreError = editMovie.genreError;

        const editDirector = editMovie.director;
        const editDirectorError = editMovie.directorError;

        const titleInput = {
            name: "title",
            label: 'Title',
            placeholder: '',
            value: editTitle,
            onChange: this.onChange,
            error: editTitleError
        };
        const yearInput = {
            name: "year",
            label: 'Year (1878 - 2019)',
            placeholder: '',
            value: editYear,
            onChange: this.onChange,
            error: editYearError
        };
        const runTimeInput = {
            name: "runtime",
            label: 'Run time (minute)',
            placeholder: '',
            value: editRunTime,
            onChange: this.onChange,
            error: editRunTimeError
        };
        const genreInput = {
            name: "genre",
            label: 'Genre',
            placeholder: '',
            value: '',
            onChange: this.onChangeGenre,
            error: editGenreError
        };

        // Build the menu items of genre select.
        const genreMenuItems = genreSelectArray.map((genre) => {
            if(genre.select){
                if(_.size(genreInput.value)){
                    genreInput.value = genreInput.value + ", "+ genre.name;
                }else {
                    genreInput.value = genreInput.value + genre.name;
                }
            }

            return <CheckBox
                key={"genre_edit_key_"+genre.name}
                label={genre.name}
                checked={genre.select}
                onCheck={() => {return this.onCheckGenre(genre.name)}}
            />
        });

        const directorInput = {
            name: "director",
            label: 'Director',
            placeholder: '',
            value: editDirector,
            onChange: this.onChange,
            error: editDirectorError
        };



        return (
            <div className="my-row edit-movie-wrapper">
                <div className="left-side-edit">
                    <div className="my-box edit-movie-column">
                        <div  className="form-input-filed">
                            <InputLabel>{titleInput.label}</InputLabel>
                            <TextField
                                name={titleInput.name}
                                label={titleInput.label}
                                placeholder={titleInput.placeholder}
                                className={''}
                                value={titleInput.value}
                                onChange={titleInput.onChange}
                                margin="normal"/>
                            {titleInput.error && <div className="edit-movie-error-text">
                                {titleInput.error}
                            </div>}
                        </div>
                        <div className="form-input-filed">
                            <InputLabel>{yearInput.label}</InputLabel>
                            <TextField type="number" min="1878" max="2019" step="1"
                                       name={yearInput.name}
                                       value={yearInput.value}
                                       onChange={yearInput.onChange}/>
                            {yearInput.error && <div className="edit-movie-error-text">
                                {yearInput.error}
                            </div>}

                        </div>
                        <div className="form-input-filed">
                            <InputLabel>{runTimeInput.label}</InputLabel>
                            <TextField type="number" min="0" step="1"
                                       name={runTimeInput.name}
                                       value={runTimeInput.value}
                                       onChange={runTimeInput.onChange}/>
                            {runTimeInput.error && <div className="edit-movie-error-text">
                                {runTimeInput.error}
                            </div>}

                        </div>

                    </div>
                </div>

                <div className="right-side-edit">
                    <div className='my-box edit-movie-column'>
                        <div  className="form-input-filed">
                            <InputLabel>{directorInput.label}</InputLabel>
                            <TextField
                                name={directorInput.name}
                                label={directorInput.label}
                                placeholder={directorInput.placeholder}
                                className={''}
                                value={directorInput.value}
                                onChange={directorInput.onChange}
                                margin="normal"/>
                            {directorInput.error && <div className="edit-movie-error-text">
                                {directorInput.error}
                            </div>}
                        </div>

                        <div className='form-input-filed genre-wrapper'>
                            <InputLabel>{genreInput.label}</InputLabel>
                            <div onClick={this.openSelectGenre} className="genre-select-input">
                                <TextField
                                    name={genreInput.name}
                                    label={genreInput.label}
                                    value={genreInput.value}
                                    onChange={genreInput.onChange}
                                    margin="normal"/>
                            </div>
                            {genreInput.error && <div className="edit-movie-error-text">
                                {genreInput.error}
                            </div>}
                            {genreSelectOpen && <GenreMenu newMenuItem={genreMenuItems} type="edit"/>}
                        </div>


                    </div>

                </div>

            </div>

        );
    }
}

editMovie.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        editMovie: state.editMovie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(editMovie);
