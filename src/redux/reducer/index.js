import handleCart from "./handleCart";
import userInfo from "./userInfo";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  userInfo,
})

export default rootReducers;