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