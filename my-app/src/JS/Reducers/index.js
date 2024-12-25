import { combineReducers } from "redux";
import listTaskReducer from "./ListTask";

const rootReducer = combineReducers({
  tasks: listTaskReducer,
});

export default rootReducer;
