import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Icons from '../../common/icons/icons';
import Button from '../Button/Button';
import * as actions from './actions';
import './styles/styles.less';
import AddMovieComponent from '../../movieList/smartComponent/addMovie';
import EditMovieComponent from '../../movieList/smartComponent/editMovie';

class MyDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.changeText = this.changeText.bind(this);
        this.clickTry = this.clickTry.bind(this);
    }

    handleOpen(){
        const action = this.props.actions;
        action.openDialog('tryOpen');
    }

    handleClose(){
        const action = this.props.actions;
        action.closeDialog('tryClose');
    }
    closeDialog(){
        const action = this.props.actions;
        action.closeDialog('tryClose');
    }
    changeText(){
        const action = this.props.actions;
        action.changeBuText('Next');
    }
    clickTry(but){
        const action = this.props.actions;
        if(but){
            action.changePageNumActive(but.pageNum);
        }
    }

    render() {
        const primary = true;
        const keyboardFocused = false;
        const dialogReducer = this.props.dialog;
        const actionsArr = {
            arr: []
        };

        const DeleteMovieComponent = ({}) => {
            return (
                <div className="confirmation-delete-body-wrapper">Are you sure you want to delete this movie?</div>
            );
        };

        const DumpComponent = ({}) => {
            return (
                <div></div>
            );
        };

        const BodyComponent = dialogReducer.dialogReducer === 'addMovie' ? AddMovieComponent :
                               dialogReducer.dialogReducer === 'editMovie' ? EditMovieComponent :
                               dialogReducer.dialogReducer === 'deleteMovie' ? DeleteMovieComponent : DumpComponent;
        // const BodyComponent = dialogReducer.dialogReducer;


        const textBtn = dialogReducer.textBut;
        const submitClickFunc = {
            func: function(){return;}
        };
        if(dialogReducer.submitClickFunc && !dialogReducer.loading){
            submitClickFunc.func = dialogReducer.submitClickFunc;
        }

        if(dialogReducer.showActionBtn){
            actionsArr.arr = [
                <FlatButton
                    label="Cancel"
                    primary={primary}
                    onClick={this.closeDialog}
                />,
                <FlatButton
                    label={textBtn}
                    primary={primary}
                    keyboardFocused={keyboardFocused}
                    onClick={submitClickFunc.func}
                />
            ];
        }

        const styleHeightInherit = {height: 'inherit'};
        const stylePaddingNam = {paddingTop: '20px'};
        const title = dialogReducer.dialogTitle;
        const butClick = this.clickTry;
        const numList = dialogReducer.pageNumberArr;
        const listItems = numList.map(function (item, i) {
            const key = 'dialog-progress-list-key'+i;
            if (item.active) {
                return (
                    <span key={key} className="dialog-num-progress active">{item.text}</span>
                );
            }
            return (
                /* eslint-disable react/jsx-no-bind*/
                <span key={key} className="dialog-num-progress" onClick={() => butClick(item)}>{item.text}</span>
            );
        });
        const loading = dialogReducer.loading;
        const closeIconStyle = {
                height: '15px',
                width: '15px',
                marginLeft: '10px',
                marginTop: '10px'
        };
        const dialogBoxClass = this.props.dialog.dialogType === 'confirmation' ? 'dialog-confirm-box' : 'dialog-box';

        const showTopDiLOG = {show: true};

        if(this.props.dialog.dialogType === 'confirmation'){
            showTopDiLOG.show = false;
        }
        return (
            <div>
                <Dialog
                    actions={actionsArr.arr}
                    modal={false}
                    bodyClassName={dialogBoxClass}
                    open={this.props.dialog.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={false}>

                    {showTopDiLOG.show && <div className="my-row dialog-top">

                            <div className="top-dialog-close-btn">
                                <div className="my-box">
                                    <Icons
                                        svgStyle={closeIconStyle}
                                        name="close-x"
                                        color="#000000"
                                        type="button"
                                        onClick={this.closeDialog}
                                    />
                                </div>
                            </div>


                            <div className="top-dialog-title">
                                <div className="my-box">
                                    {title}
                                </div>
                            </div>
                            <div className="top-dialog-right-side">
                                <div className="my-box">

                                </div>
                            </div>
                    </div>}
                    <div className="dialog-body grayish-background">
                        <BodyComponent/>
                    </div>

                </Dialog>
            </div>
        );
    }
}

MyDialog.propTypes = {
    dialog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        dialog: state.dialogReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDialog);
