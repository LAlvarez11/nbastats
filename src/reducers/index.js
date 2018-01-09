import { combineReducers } from "redux";
import FetchReducer from "./reducer_fetch";

const rootReducer = combineReducers({
  PPG_result : FetchReducer
});

export default rootReducer;
