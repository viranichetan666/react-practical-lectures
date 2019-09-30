export const initialState = {
  todos: [],
  todoInput: "",
  searchText: ""
};

export const reducers = (state, action) => {
  switch (action.type) {
    case "setMyTodos":
      return {
        ...state,
        todos: action.todos
      };
    case "deleteTodod":
      return {
        ...state,
        todos: state.todos.filter(a => a.id !== action.id)
      };
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, { id: Math.random(), text: action.text }]
      };
    case "setTodoInput":
      return {
        ...state,
        todoInput: action.text
      };
    case "setSearchInput":
      return {
        ...state,
        searchText: action.text
      };
    default:
      return {
        ...state
      };
  }
};
