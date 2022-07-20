import handleCart from "./handleCart";
import userInfo from "./userInfo";
import TodoList from "./TodoList";
import TicketList from "./TicketList";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  userInfo,
  TodoList,
  TicketList,
})

export default rootReducers;