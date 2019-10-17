import React, { createContext, useReducer } from "react";
import { taskReducer, initialState } from "./taskReducer";

const TaskContext = createContext();

const TaskContextProvider = props => {
  const [state, setState] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={[state, setState]}>
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider, TaskContext };
