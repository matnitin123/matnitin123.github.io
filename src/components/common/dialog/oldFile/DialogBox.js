import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
    radioButton: {
        marginTop: 16
    }
};

/**
 * Dialog content can be scrollable.
 */
export default class DialogBox extends React.Component {


    handleOpen() {
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    render() {
        const primary = true;
        const keyboardFocused = true;
        const autoScrollBodyContent = true;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={primary}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={primary}
                keyboardFocused={keyboardFocused}
                onTouchTap={this.handleClose}
            />
        ];

        const radios = [];
        for (let i = 0; i < 30; i++) {
            radios.push(
                <RadioButton
                    key={i}
                    value={`value${i + 1}`}
                    label={`Option ${i + 1}`}
                    style={styles.radioButton}
                />
            );
        }

        return (
            <div>
                <RaisedButton label="Scrollable Dialog" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={autoScrollBodyContent}
                >
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                        {radios}
                    </RadioButtonGroup>
                </Dialog>
            </div>
        );
    }
}