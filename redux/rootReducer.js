import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { loaderReducer } from "./loader/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});
