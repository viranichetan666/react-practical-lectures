import React, { Fragment } from "react";
import Mqtt from "services/mqtt/mqttHoc";
import { publishDeletedTask } from "./taskHepler";

const Task = props => {
  const {
    task,
    mqttState: { client }
  } = props;

  const deleteTask = () => {
    const data = {
      id: task.id
    };
    publishDeletedTask(client, data);
  };

  return (
    <Fragment>
      {task && (
        <div className="flex-x pa15 light ma15">
          <div className="flex-1 task-title">{task.title}</div>
          <div className="cursor-pointer" onClick={deleteTask}>
            Delete
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Mqtt(Task);
