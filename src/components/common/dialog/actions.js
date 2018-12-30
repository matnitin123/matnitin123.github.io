import * as types from './const/actionTypes';
export function openDialog() {
    return {type: types.OPEN_DIALOG, payload: {}};
}
export function closeDialog() {
    return {type: types.CLOSE_DIALOG, payload: {}};
}
export function changeBuText(butText) {
    return {type: types.CHANGE_DIALOG_BUT_TEXT, butText: butText};
}
export function changeBodyReducer(reducer, params) {
    return {type: types.CHANGE_DIALOG_REDUCER, reducer: reducer, params: params};
}
export function setDialogType(type) {
    return {type: types.CHANGE_DIALOG_TYPE, dialogType: type};
}

export function changePageNumActive(pageNum) {
    return {type: types.CHANGE_DIALOG_NUM_ACTIVE, pageNum: pageNum};
}
export function changeNmberOfPage(number){
    return {type: types.CHANGE_DIALOG_NUMBER_OF_PAGE, number: number};
}
export function showDialogActionBtn() {
    return {type: types.SHOW_DIALOG_ACTION_BTN, payload: {}};
}
export function hideDialogActionBtn() {
    return {type: types.HIDE_DIALOG_ACTION_BTN, payload: {}};
}
export function setDialogTitle(title) {
    return {type: types.SET_DIALOG_TITLE, dialogTitle: title};
}
export function setsSubmitFunc(func) {
    return {type: types.SET_SUBMIT_FUNCTION, func: func};
}
export function dialogStartLoading() {
    return {type: types.DIALOG_START_LOADING};
}
export function dialogStopLoading() {
    return {type: types.DIALOG_STOP_LOADING};
}
export function initializeState() {
    return {type: types.INITIALIZE_STATE, payload: {}};
}