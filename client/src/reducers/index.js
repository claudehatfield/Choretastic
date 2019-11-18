import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import todoReducer from './todoReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  todo: todoReducer
});