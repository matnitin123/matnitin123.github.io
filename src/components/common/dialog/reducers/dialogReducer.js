import * as types from '../const/actionTypes';
import _ from 'lodash';
const initializeState = {
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
};

export default function dialogReducer(state = initializeState, action) {
    switch (action.type) {
        case types.INITIALIZE_STATE:
        {
            return initializeState;
        }
        case types.OPEN_DIALOG:
        {
            // open only if there is dialogReducer
            if (state.dialogReducer) {
                return Object.assign({}, state, {
                    open: true
                });
            }
            return Object.assign({}, state, {});

        }
        case types.CLOSE_DIALOG:
        {
            return initializeState;
            //return Object.assign({}, state, {
            //    open: false
            //});
        }
        case types.CHANGE_DIALOG_BUT_TEXT:
        {
            if (action.butText) {
                return Object.assign({}, state, {
                    textBut: action.butText
                });
            }
            return Object.assign({}, state, {});
        }
        case types.CHANGE_DIALOG_REDUCER:
        {
            if (action.reducer) {
                if (action.params) {
                    return Object.assign({}, state, {
                        dialogReducer: action.reducer,
                        params: action.params
                    });
                }
                return Object.assign({}, state, {
                    dialogReducer: action.reducer,
                    params: {}
                });

            }
            return Object.assign({}, state, {});
        }
        case types.CHANGE_DIALOG_NUM_ACTIVE:
        {
            let newNumArr = _.cloneDeep(state.pageNumberArr);
            // check first if page exist
            let pageExist = false;
            _.forEach(newNumArr, function(page){
                if(page.pageNum == action.pageNum){
                    pageExist = true;
                }
            });
            // if page exist so change the active!
            if(pageExist){
                _.forEach(newNumArr, function(page){
                    if(page.pageNum == action.pageNum){
                        page.active = true;
                    }else{
                        page.active = false;
                    }
                });
            }
            return Object.assign({}, state, {
                pageNumberArr: newNumArr
            });
        }
        case types.CHANGE_DIALOG_NUMBER_OF_PAGE:
        {
            if(!action.number || action.number < 1){
                return Object.assign({}, state, {
                    pageNumberArr: []
                });
            }
            const newPageNumberArr = [{pageNum: 1, text: 1, active: true}];
            let i = 1;
            for(i = 1; i < action.number; i++){
                newPageNumberArr.push({pageNum: i+1, text: i+1, active: false});
            }
            return Object.assign({}, state, {
                pageNumberArr: newPageNumberArr
            });

        }
        case types.SHOW_DIALOG_ACTION_BTN:
        {
            return Object.assign({}, state, {
                showActionBtn: true
            });
        }
        case types.HIDE_DIALOG_ACTION_BTN:
        {
            return Object.assign({}, state, {
                showActionBtn: false
            });
        }
        case types.SET_DIALOG_TITLE:
        {
            if(action.dialogTitle){
                return Object.assign({}, state, {
                    dialogTitle: action.dialogTitle
                });
            }
            return Object.assign({}, state, {
                dialogTitle: ''
            });

        }
        case types.SET_SUBMIT_FUNCTION:
        {
            return Object.assign({}, state, {
                submitClickFunc: action.func
            });
        }
        case types.DIALOG_START_LOADING:
        {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case types.DIALOG_STOP_LOADING:
        {
            return Object.assign({}, state, {
                loading: false
            });
        }
        case types.CHANGE_DIALOG_TYPE:
        {
            if(action.dialogType && action.dialogType == 'confirmation'){
                return Object.assign({}, state, {
                    dialogType: 'confirmation'
                });
            }
            return Object.assign({}, state, {
                dialogType: null
            });
        }
        default:
            return state;
    }
}
