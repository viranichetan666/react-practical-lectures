import { put, fork, takeEvery, all } from "redux-saga/effects";
import todoActions from "redux/todo/actions";

function* getTodo() {
  const todos = [
    {
      id: 1,
      name: "Design"
    },
    {
      id: 2,
      name: "Develop"
    }
  ];
  yield put({ type: todoActions.TODORECEIVED, todos });
}

function* addTodo(data) {
  // console.log("Finally Add Todo with Saga", data);
  // Api Call Here
  const newTodo = {
    id: Math.random(),
    name: data.todoInput
  };
  yield put({ type: todoActions.ADD_TODO, todo: newTodo });
}

function* deleteTodo(data) {
  // Api Call Here
  yield put({ type: todoActions.DELETE_TODO, id: data.id });
}

function* watchGetTodo() {
  yield takeEvery(todoActions.GETTODO, getTodo);
}

function* watchDeleteTodo() {
  yield takeEvery(todoActions.REQ_DELETE_TODO, deleteTodo);
}

function* watchAddTodo() {
  yield takeEvery(todoActions.REQ_ADD_TODO, addTodo);
}

export default function* todoSagas() {
  yield all([fork(watchGetTodo), fork(watchDeleteTodo), fork(watchAddTodo)]);
}
