import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../action';


class genreMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        // add event listener for clicks
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick(e){
        if(!ReactDOM.findDOMNode(this).contains(e.target)) {
            // Need close the menu!!!!
            const type = this.props.type;
            const actions = this.props.actions;
            if(type === 'add'){
                actions.addCloseGenreSelectOption();
            }else if(type === 'edit'){
                actions.editCloseGenreSelectOption();
            }
        }
    }

    render() {
        const menuItem = this.props.newMenuItem;
        return (
            <div className="genre-menu-box">
                <div className="item-genre">
                    {menuItem}
                </div>
            </div>
        );
    }
}

genreMenu.propTypes = {
    actions: PropTypes.object.isRequired,
    newMenuItem: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        newMenuItem: ownProps.newMenuItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(genreMenu);
