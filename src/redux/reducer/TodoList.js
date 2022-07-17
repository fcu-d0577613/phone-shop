const todos = [
  {
    id: 1,
    name: "one"
  },
  {
    id: 2,
    name: "two"
  },
  {
    id: 3,
    name: "three"
  },
]

const TodoList = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
      case "ADD_TODO":
          newTodos = [...state];
          newTodos.push(action.payload);
          return newTodos;

      case "DELETE_TODO":
          newTodos = [...state];
          newTodos = newTodos.filter(todo => todo.id != action.payload);
          return newTodos;

          case "UPDATE_TODO":
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            //若list不為空 傳過來的todo(id,name) 給新的newTodos並回傳
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}

export default TodoList;