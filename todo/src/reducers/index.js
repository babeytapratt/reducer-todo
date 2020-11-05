export const initialState = {
    todos: [
        {
        todo: "",
        completed: false,
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ADD_TODO":
        const newTodoItem = {
          todo: action.payload,
          completed: false,
        };
        return {
          ...state,
          todos: [...state.todos, newTodoItem],
        };
      case "SET_TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === action.id) {
              return { ...item, completed: !item.completed };
            } else {
              return item;
            }
          }),
        };
      case "SET_CLEAR_TODO":
        return {
          ...state,
          todos: state.todos.filter((item) => !item.completed),
        };
      default:
        return state;
    }
  };
