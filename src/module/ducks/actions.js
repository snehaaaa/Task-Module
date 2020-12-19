import { createAction } from "redux-actions";

const actionTypes = {
    TOGGLE_LIST: "TOGGLE_LIST",
    ADD_TASK:"ADD_TASK",
    DELETE_TASK:"DELETE_TASK",
    FILTER_CHANGE:"FILTER_CHANGE",
    CLEAR_COMPLETED:"CLEAR_COMPLETED"

};
export default actionTypes;

export const getToggleList = createAction(actionTypes.TOGGLE_LIST);
export const addTask = createAction(actionTypes.ADD_TASK);
export const deleteParticularTask = createAction(actionTypes.DELETE_TASK);
export const getFilterList = createAction(actionTypes.FILTER_CHANGE);
export const clearCompleted = createAction(actionTypes.CLEAR_COMPLETED);




