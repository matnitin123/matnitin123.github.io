import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "../../common/Button/Button";
import Icons from "../../common/icons/icons";



/**
 * item: {
 *     title string(),
 *     year number(),
 *     runTime: number() of minute,
 *     genre: string() ,
 *     director: string()
 * }
 * */

const listItem = ({title, year, runTime, genre, director, editClick, id, deleteClick}) => {


    const closeIconStyle = {
        height: '15px',
        width: '15px',
        marginLeft: '10px',
        marginTop: '10px'
    };

    const clickFunc  = () => {
        editClick(id);
    }

    const sizeRunTime = _.size(""+runTime+"");
    const show = {
        title,
        year,
        genre,
        director
    };

    if(sizeRunTime === 2){
        show.runTime = ""+runTime + "  min";
    }else{ // 3
        show.runTime = ""+runTime + " min";
    }
    // Todo fix that that all time be aligned.

    return (
        <div className="my-row movie-list-item">
            <div className="col-title">
                <div className="my-box">
                    <div className="movie-title">
                        {show.title}
                    </div>
                </div>
            </div>
            <div className="col-year">
                <div className="my-box">
                    <div className="">
                        {show.year}
                    </div>
                </div>
            </div>
            <div className="col-runtime">
                <div className="my-box">
                    <div className="">
                        {show.runTime}
                    </div>
                </div>
            </div>
            <div className="col-genre">
                <div className="my-box">
                    <div className="">
                        {show.genre}
                    </div>
                </div>
            </div>
            <div className="col-director">
                <div className="my-box">
                    <div className="">
                        {show.director}
                    </div>
                </div>
            </div>
            <div className="col-edit-btn edit-button">
                <div className="my-box">
                    <div>
                        <Button onClick={clickFunc} text={'EDIT'} type="try-button1"></Button>
                    </div>
                </div>
            </div>
            <div className="col-delete">
                <div className="my-box">
                    <div className="">
                        <Icons
                            svgStyle={closeIconStyle}
                            name="close-x"
                            color="#000000"
                            type="button"
                            onClick={deleteClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

listItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,  // number of minute
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    editClick: PropTypes.func.isRequired,
    deleteClick: PropTypes.func.isRequired
};

export default listItem;
