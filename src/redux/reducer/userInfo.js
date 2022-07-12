import {createStore}  from "redux";

const initialState = {
  users: [],
  loggedInUser: null,
  products: [{
    id: 1,
    name: "pen",
    price: 5
  },{
    id: 2,
    name: "apple",
    price: 15
  },{
    id: 3,
    name: "piepie",
    price: 25
  },{
    id: 4,
    name: "ruler",
    price: 10
  },{
    id: 5,
    name: "banana",
    price: 10
  }],
  cart: []
}

const userInfo = (state = initialState, action) => {
  switch(action.type){

    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }

    default:
        return state;
        break;
  }
}

export default userInfo;