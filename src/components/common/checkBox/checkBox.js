import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CheckBox from 'material-ui/Checkbox';
import './style.less';

/*
 label="Can Add patient"
 checked={newUser.addPatient}
 onCheck={this.toggleChangeAddPatient}
* */
const checkBox = ({label, checked, onCheck, styleClass}) => {
    let className = 'checkbox-container';
    if(styleClass){
        className = className+' '+styleClass;
    }
    //const className = styleClass ? 'checkbox-container': 'checkbox-container '+styleClass;
    return (
        <div className={className}>
            <CheckBox
                label={label}
                checked={checked}
                onCheck={onCheck}
            />
        </div>
    );
};

checkBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onCheck: PropTypes.func.isRequired,
    styleClass: PropTypes.string,

};

export default checkBox;
