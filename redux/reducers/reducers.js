import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducer";
import { DELETE_SESSION } from "../constants/sessionConstants";
const reducer = combineReducers({
  data: sessionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === DELETE_SESSION) {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;