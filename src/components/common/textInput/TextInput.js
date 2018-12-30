import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

const TextInput = ({name, label, onChange, placeholder, value, error, type}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }
    let inputType = "text";
    if(type){
        inputType = type;
    }
    return (
        <div className={wrapperClass}>
            <div className="input-wrap-label">{label}</div>
            <div className="input-wrap">
                <input
                    type={inputType}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && <div className="alert-danger-wrap font-alert">
                    <div className="alert-danger-text">
                        {error}
                    </div>
                </div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string
};

export default TextInput;
