import { combineReducers } from "redux";
import TaskList from "../../../module/ducks/reducer";

const CombineReducers = combineReducers({
    TaskList,
});
export default CombineReducers;
