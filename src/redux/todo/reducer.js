import todoAction from "./actions";

const initState = {
  todos: [],
  loading: false
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case todoAction.GETTODO:
      return {
        ...state,
        loading: true
      };
    case todoAction.TODORECEIVED:
      return {
        ...state,
        todos: action.todos,
        loading: false
      };
    case todoAction.REQ_ADD_TODO:
      return {
        ...state,
        todoAddLoader: true
      };
    case todoAction.REQ_DELETE_TODO:
      return {
        ...state,
        todoDeleteLoader: true
      };
    case todoAction.ADD_TODO:
      return {
        ...state,
        todoAddLoader: false,
        todos: [...state.todos, action.todo]
      };
    case todoAction.DELETE_TODO:
      return {
        ...state,
        todoDeleteLoader: false,
        todos: state.todos.filter(a => a.id !== action.id)
      };
    default:
      return state;
  }
}
