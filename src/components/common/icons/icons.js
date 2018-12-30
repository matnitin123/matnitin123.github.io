import React from 'react';
import PropTypes from 'prop-types';
import * as SvgConst from './constSvgLocal';
import _ from 'lodash';
import './icon.less';

const icons = ({name, size, color, svgStyle, onClick, type, disable}) => {
    let sizeViewBox = '0 0 36 36';
    const path = {};
    const pathElements = {};
    let localColor = '#f2f2f2';
    const localStyle = _.cloneDeep(svgStyle) || {};
    const onClickFunc = onClick || null;
    let classButton = 'icon_class_simple';
    if(color){
        localColor = color;
    }
    if(disable){
        localColor = '#cccccc';
    }
    if(type === 'button'){
        localStyle.cursor = 'pointer';
        if(!disable){
            classButton = 'icon_class_button';
        }
        else {
            classButton = 'icon_class_simple';
            localStyle.cursor = 'not-allowed';
        }
    }
    switch (name){
        case 'close-x':{
            path.d = SvgConst.CLOSE_WINDOW;
            pathElements.show = [<path d={path.d} key={path.d}></path>];
            break;
        }
        default:
            return (<div></div>);
    }

    const pathElementsToShow = pathElements.show.map(function (item, i) {
        return (item);
    });
    return (
        <div>
            <svg onClick={onClickFunc} xmlns="http://www.w3.org/2000/svg" viewBox={sizeViewBox} fill={localColor} style={localStyle} className={classButton}>
                {pathElementsToShow}
            </svg>
        </div>
    );
};

icons.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    svgStyle: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disable: PropTypes.bool
};

export default icons;
