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


export const addTodo = (todo) => {
  return{
    type: "ADD_TODO",
    payload: todo,
    
  }
}

export const deleteTodo = (todoId) => {
  return{
    type: "DELETE_TODO",
    payload: todoId,
    
  }
}
export const updateTodo = (todo) => {
  return{
    type: "UPDATE_TODO",
    payload: todo,
    
  }
}
export const addTicket = (ticket) => {
  return{
    type: "ADD_TICKET",
    payload: ticket,
    
  }
}

export const delTicket = (ticketid) => {
  return{
    type: "DELETE_TICKET",
    payload: ticketid,
    
  }
}

