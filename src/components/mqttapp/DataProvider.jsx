// HOC.js

import React, { useContext } from "react";
import { TaskContext } from "./context/TaskContextProvider";

const TaskDataProvider = HocComponent => {
  return function WrappedComponent(props) {
    const [state, dispatch] = useContext(TaskContext);

    return (
      <div>
        <HocComponent
          {...props}
          taskState={state}
          taskDispatch={dispatch}
        ></HocComponent>
      </div>
    );
  };
};

export default TaskDataProvider;
