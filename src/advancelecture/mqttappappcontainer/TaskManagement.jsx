import React from "react";
import TaskBoard from "components/mqttapp/TaskBoard";
import { TaskContextProvider } from "components/mqttapp/context/TaskContextProvider";
import { MqttProvider } from "services/mqtt/MqttProvider";

const TaskManagement = () => {
  return (
    <MqttProvider>
      <TaskContextProvider>
        <TaskBoard />
      </TaskContextProvider>
    </MqttProvider>
  );
};

export default TaskManagement;
