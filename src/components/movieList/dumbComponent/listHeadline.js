import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "../../common/Button/Button";


const listHeadline = ({addNewMovieClick}) => {

    const clickFunc  = () => {
        addNewMovieClick();
    };

    return (
        <div className="my-row movie-list-headline">
            <div className="col-title">
                <div className="my-box">
                    <div className="headline-text">
                        Title
                    </div>
                </div>
            </div>
            <div className="col-year">
                <div className="my-box">
                    <div className="headline-text">
                        Year
                    </div>
                </div>
            </div>
            <div className="col-runtime">
                <div className="my-box">
                    <div className="headline-text">
                        Runtime
                    </div>
                </div>
            </div>
            <div className="col-genre">
                <div className="my-box">
                    <div className="headline-text">
                        Genre
                    </div>
                </div>
            </div>
            <div className="col-director">
                <div className="my-box">
                    <div className="headline-text">
                        Director
                    </div>
                </div>
            </div>
            <div className="col-add-btn add-button">
                <div className="my-box">
                    <div>
                        <Button onClick={clickFunc} text={'ADD'} type="try-button1"></Button>
                    </div>
                </div>
            </div>
            <div className="col-delete">
                <div className="box">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    );
};

listHeadline.propTypes = {
    addNewMovieClick: PropTypes.func.isRequired
};

export default listHeadline;
