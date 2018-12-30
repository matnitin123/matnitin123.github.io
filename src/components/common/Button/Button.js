import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './style.less';


const Button = ({text, onClick, type, disable, fonClass, loading}) => {
    let localType = type;
    if(disable){
        localType = 'disable-button';
    }
    // let localFontClass = 'title';
    // if(fonClass){
    //     localFontClass = fonClass;
    // }
    const className = " button-primary "+ localType;
    if(loading){
        return (
            <div className="button_simulate_loader">
                <div className="loader">
                </div>
            </div>);
    }
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );

    /*return (
        <div className={className} onClick={onClick}>
                {text}
        </div>
    );*/
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    disable: PropTypes.bool,
    loading: PropTypes.bool
};

export default Button;
