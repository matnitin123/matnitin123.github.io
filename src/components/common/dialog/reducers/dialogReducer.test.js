import expect from 'expect';
import dialogReducer from './dialogReducer';
import * as actions from '../actions';


describe('Dialog Reducer', () => {

    it('dialog start loading DIALOG_START_LOADING', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: false,
            showActionBtn: true
        };
        const actionOpenDialog = actions.dialogStartLoading();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                loading: true
            })
        );
    });
    it('dialog stop loading DIALOG_STOP_LOADING', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: true,
            showActionBtn: true
        };
        const actionOpenDialog = actions.dialogStopLoading();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                loading: false
            })
        );
    });
    it('set dialog title SET_DIALOG_TITLE', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: false,
            showActionBtn: true
        };
        const newTitle = 'This is dialog title';
        const actionOpenDialog = actions.setDialogTitle(newTitle);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                dialogTitle: newTitle
            })
        );
    });
    it('set dialog title with none SET_DIALOG_TITLE', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "old title",
            loading: false,
            showActionBtn: true
        };
        const actionOpenDialog = actions.setDialogTitle(null);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                dialogTitle: ''
            })
        );
    });
    it('set dialog submit function SET_SUBMIT_FUNCTION', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: false,
            showActionBtn: true
        };

        const newSubmitFunction = function newSubmit(){
            /* eslint-disable no-console */
            console.log("THis is the new submit function");
        };
        const actionOpenDialog = actions.setsSubmitFunc(newSubmitFunction);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                submitClickFunc: newSubmitFunction
            })
        );
    });
    it('hide dialog actions button HIDE_DIALOG_ACTION_BTN', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: false,
            showActionBtn: true
        };

        const actionOpenDialog = actions.hideDialogActionBtn();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                showActionBtn: false
            })
        );
    });
    it('show dialog actions button SHOW_DIALOG_ACTION_BTN', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            submitClickFunc :() => {
                /* eslint-disable no-console */
                console.log("Hello submit function");
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ],
            dialogTitle: "",
            loading: false
        };

        const actionOpenDialog = actions.showDialogActionBtn();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            Object.assign({}, initialState, {
                showActionBtn: true
            })
        );
    });
    it('change number of page CHANGE_DIALOG_NUMBER_OF_PAGE', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const actionOpenDialog = actions.changeNmberOfPage(5);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false},
                {pageNum: 4, text: 4, active: false},
                {pageNum: 5, text: 5, active: false}
            ]
        });
    });
    it('change number of page to none CHANGE_DIALOG_NUMBER_OF_PAGE', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const actionOpenDialog = actions.changeNmberOfPage(null);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: []
        });
    });

    it('open dialog and there is no reducer OPEN_DIALOG', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: null,
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const actionOpenDialog = actions.openDialog();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: null,
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('open dialog and reducer exist OPEN_DIALOG', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const actionOpenDialog = actions.openDialog();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('close dialog CLOSE_DIALOG', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const actionOpenDialog = actions.closeDialog();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: 'notExistDialog',
            submitClickFunc :null,
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false},
                {pageNum: 4, text: 4, active: false},
                {pageNum: 5, text: 5, active: false}
            ],
            dialogTitle: "",
            loading: false
        });
    });
    it('change dialog button text CHANGE_DIALOG_BUT_TEXT', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const actionOpenDialog = actions.changeBuText("Next");
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Next',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('change dialog button text with null CHANGE_DIALOG_BUT_TEXT', () => {
        const initialState = {
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const actionOpenDialog = actions.changeBuText();
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('change dialog reducer CHANGE_DIALOG_REDUCER', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const bodyReducer = {otherObject: [1,2,3,4,5], text: "New Reducer", id: 3463467};
        const params = {list: [23,43265,3456,2345]};
        const actionOpenDialog = actions.changeBodyReducer(bodyReducer, params);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: bodyReducer,
            params: params,
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('change dialog reducer not params CHANGE_DIALOG_REDUCER', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const bodyReducer = {otherObject: [1,2,3,4,5], text: "New Reducer", id: 3463467};
        const params = null;
        const actionOpenDialog = actions.changeBodyReducer(bodyReducer, params);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual({
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: bodyReducer,
            params: {},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('change dialog reducer not reducer CHANGE_DIALOG_REDUCER', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        };

        const bodyReducer = null;
        const params = {list: [23,43265,3456,2345]};
        const actionOpenDialog = actions.changeBodyReducer(bodyReducer, params);
        const newState = dialogReducer(initialState, actionOpenDialog);

        expect(newState).toEqual(
            initialState
        );
    });
    it('change dialog num page active num exist CHANGE_DIALOG_NUM_ACTIVE', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const numChangeTo = 3;
        const actionOpenDialog = actions.changePageNumActive(numChangeTo);

        const newState = dialogReducer(initialState, actionOpenDialog);
        expect(newState).toEqual({
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: false},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true}
            ]
        });
    });
    it('change dialog num page active num not exist CHANGE_DIALOG_NUM_ACTIVE', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const numChangeTo = 4;
        const actionOpenDialog = actions.changePageNumActive(numChangeTo);

        const newState = dialogReducer(initialState, actionOpenDialog);
        expect(newState).toEqual(initialState);
    });
    it('change dialog type to confirmation CHANGE_DIALOG_TYPE', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const dialogType = 'confirmation';
        const actionOpenDialog = actions.setDialogType(dialogType);

        const newState = dialogReducer(initialState, actionOpenDialog);
        expect(newState).toEqual(
            Object.assign({}, initialState, {
                dialogType: 'confirmation'
            })
        );
    });
    it('change dialog type to not confirmation CHANGE_DIALOG_TYPE', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const dialogType = 'other_type';
        const actionOpenDialog = actions.setDialogType(dialogType);

        const newState = dialogReducer(initialState, actionOpenDialog);
        expect(newState).toEqual(
            Object.assign({}, initialState, {
                dialogType: null
            })
        );
    });
    it('change dialog type to not null CHANGE_DIALOG_TYPE', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const dialogType = null;
        const actionOpenDialog = actions.setDialogType(dialogType);

        const newState = dialogReducer(initialState, actionOpenDialog);
        expect(newState).toEqual(
            Object.assign({}, initialState, {
                dialogType: null
            })
        );
    });
    it('not exist action', () => {
        const initialState = {
            open: true,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: {reducerName: "Try reducer", id: 2465},
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false}
            ]
        };

        const actionInitialize = function(){
            return {type: 'not_exist_action_for_test', payload: {}};
        };
        //const actionInitialize = actionInitialize();
        const newState = dialogReducer(initialState, actionInitialize);

        expect(newState).toEqual(initialState);
    });
    it('initialize state INITIALIZE_STATE', () => {
        const initialState = {
            open: true,
            textBut: 'Next',
            disableBut: true,
            submitClickFunc : function(){
                /* eslint-disable no-console */
                console.log("Submit function");
            },
            dialogReducer: {
                reducer: 'reducer...'
            },
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: true},
                {pageNum: 4, text: 4, active: false},
                {pageNum: 5, text: 5, active: false}
            ]
        };

        const actionInitialize = actions.initializeState();
        const newState = dialogReducer(initialState, actionInitialize);

        expect(newState).toEqual({
            open: false,
            textBut: 'Submit',
            disableBut: false,
            dialogReducer: 'notExistDialog',
            submitClickFunc :null,
            pageNumberArr: [
                {pageNum: 1, text: 1, active: true},
                {pageNum: 2, text: 2, active: false},
                {pageNum: 3, text: 3, active: false},
                {pageNum: 4, text: 4, active: false},
                {pageNum: 5, text: 5, active: false}
            ],
            dialogTitle: "",
            loading: false
        });
    });

});