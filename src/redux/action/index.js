//add
export const addCart = (product) => {
  return{
    type: "ADDITEM",
    payload: product
  }
}

//Delete
export const delCart = (product) => {
  return{
    type: "DELITEM",
    payload: product
  }
}

//register
export const register = (name, email, password) => {
  return{ 
    type: "REGISTER",
    payload: {
      name, email, password
    }
  }
}

