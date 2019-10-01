import { combineReducers } from "redux";
import employees from "./employees";
import managers from "./managers";

var rootReducer = null;

export default rootReducer = combineReducers({
    employees: employees,
    managers: managers
});