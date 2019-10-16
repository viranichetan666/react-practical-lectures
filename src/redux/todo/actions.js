const todoAction = {
  GETTODO: "GETTODO",
  TODORECEIVED: "TODORECEIVED",
  REQ_ADD_TODO: "REQ_ADD_TODO",
  ADD_TODO: "ADD_TODO",
  REQ_DELETE_TODO: "REQ_DELETE_TODO",
  DELETE_TODO: "DELETE_TODO",

  getTodo: () => ({
    type: todoAction.GETTODO
  }),
  todoReceived: data => {
    return {
      type: todoAction.TODORECEIVED,
      todos: data
    };
  },
  requestAddTodo: input => ({
    type: todoAction.REQ_ADD_TODO,
    todoInput: input
  }),
  requestDeleteTodo: id => {
    return {
      type: todoAction.REQ_DELETE_TODO,
      id: id
    };
  }
};

export default todoAction;
