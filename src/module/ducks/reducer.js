
import { handleActions } from "redux-actions";
import actionTypes from "./actions";
import { TASK_LIST,FILTER } from "../../app/const";
import {toggleDataData,removeTask,toggleFilter,getFilterdList,clearCompleted} from "./utils";

const INIT_STATE = {
    taskList: TASK_LIST,
    filter:FILTER,
    filteredList:undefined
    

};

const Reducer = handleActions(
    {
        [actionTypes.TOGGLE_LIST]: (state, action) => 
        ({
            ...state,
            taskList: toggleDataData(state.taskList, action.payload),
        }),
        [actionTypes.ADD_TASK]: (state, action) => 
        ({
            ...state,
            taskList: [...state.taskList, action.payload]
        }),
        [actionTypes.DELETE_TASK]: (state, action) => 
        ({
            ...state,
            taskList:removeTask(state.taskList, action.payload)
        }),
        [actionTypes.FILTER_CHANGE]: (state, action) => 
        ({
            ...state,
            filter:toggleFilter(state.filter, action.payload.filterId),
            filteredList:getFilterdList(state.taskList,action.payload.filterId,!action.payload.isActive)
        }),
        [actionTypes.CLEAR_COMPLETED]: (state) => 
        ({
            ...state,
            taskList:clearCompleted(state.taskList)
        }),
        
    },
    INIT_STATE
);

export default Reducer;
