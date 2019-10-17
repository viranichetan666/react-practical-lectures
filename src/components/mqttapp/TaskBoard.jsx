import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import TaskDataProvider from "./DataProvider";
import Mqtt from "services/mqtt/mqttHoc";
import { publishAddedCard } from "./taskHepler";

const TaskBoard = props => {
  const [cardInput, setCardInput] = useState("");

  const {
    taskState: { cards },
    taskDispatch,
    mqttState: {
      client,
      taskPubSUbEvent: { taskAdd, taskDelete },
      cardPubSUbEvent: { cardAdd }
    }
  } = props;

  useEffect(() => {
    // Task Add Watcher
    if (taskAdd) {
      taskDispatch({
        type: "addTask",
        data: taskAdd.data
      });
    }
  }, [taskAdd, taskDispatch]);

  useEffect(() => {
    // Task Add Watcher
    if (taskDelete) {
      taskDispatch({
        type: "deleteTask",
        data: taskDelete.data
      });
    }
  }, [taskDelete, taskDispatch]);

  useEffect(() => {
    // Card Add Watcher
    if (cardAdd) {
      taskDispatch({
        type: "cardAdd",
        data: cardAdd.data
      });
    }
  }, [cardAdd, taskDispatch]);

  const handlerAddCard = () => {
    const data = {
      id: Math.random(),
      title: cardInput
    };
    publishAddedCard(client, data);
  };

  return (
    <div className="pa15 flex-x task-board-container">
      {cards &&
        cards.map(card => {
          return <TaskCard card={card} key={card.id} />;
        })}
      <div className="pa15">
        <input
          className="pa10"
          value={cardInput}
          type="text"
          onChange={e => setCardInput(e.target.value)}
        />
        <div className="text-center pt10">
          <button className="pa10 fill-width" onClick={handlerAddCard}>
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mqtt(TaskDataProvider(TaskBoard));
