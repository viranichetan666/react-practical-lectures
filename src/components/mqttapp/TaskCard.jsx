import React, { useState, useMemo } from "react";
import Task from "./Task";
import TaskDataProvider from "./DataProvider";
import Mqtt from "services/mqtt/mqttHoc";
import { publishAddedTask } from "./taskHepler";

const TaskCard = props => {
  const [addTaskInput, setAddTaskInput] = useState("");

  const {
    card,
    taskState: { tasks },
    mqttState: { client }
  } = props;

  const specialTask = useMemo(() => {
    return tasks.filter(a => a.cardId === card.id);
  }, [tasks, card]);

  const handlerAddTask = () => {
    const data = {
      id: Math.random(),
      title: addTaskInput,
      cardId: card.id
    };
    publishAddedTask(client, data);
  };

  return (
    <div className="task-card bluecolor br10 mr10">
      <div className="pa15 an-20 bold-text">{card.title}</div>
      {specialTask && specialTask.length ? (
        specialTask.map((task, i) => {
          return <Task key={i} task={task} />;
        })
      ) : (
        <div className="pa15 an-16 demi-bold-text">No Task</div>
      )}
      <div className="pa15 flex-x">
        <input
          className="pa10 flex-1"
          value={addTaskInput}
          type="text"
          onChange={e => setAddTaskInput(e.target.value)}
        />
        <div>
          <button className="pa10" onClick={handlerAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mqtt(TaskDataProvider(TaskCard));
