import { combineReducers } from "redux";
import { likesReducer } from './likesReducer'
import { inputReducer } from "./inputReducer";
import { commentReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
  input: inputReducer,
  likes: likesReducer,
  comments: commentReducer,
});
