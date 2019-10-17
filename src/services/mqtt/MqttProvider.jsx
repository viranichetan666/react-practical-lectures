import React, {
  createContext,
  useEffect,
  useCallback,
  useReducer
} from "react";
import MQTT from "mqtt";
import topicsMaker from "services/mqtt/topicsMaker";
import { initialState, mqttReducer } from "./mqttReducers";
import {
  addedTaskTopic,
  deletedTaskTopic,
  addedCardTopic
} from "components/mqttapp/taskHepler";

const mqttContext = createContext();

const MqttProvider = props => {
  const [state, dispatch] = useReducer(mqttReducer, initialState);

  const { client } = state;

  const subscribeTopic = useCallback(
    topic => {
      client.subscribe(topic, () => {
        console.log(`subscribed for ${topic}`);
      });
    },
    [client]
  );

  const unsubscribeTopic = useCallback(
    topic => {
      client.unsubscribe(topic, () => {
        console.log(`unsubscribed for ${topic}`);
      });
    },
    [client]
  );

  const subscribeAllTopics = useCallback(() => {
    subscribeTopic(addedTaskTopic());
    subscribeTopic(deletedTaskTopic());
    subscribeTopic(addedCardTopic());
    return;
  }, [subscribeTopic]);

  const unsubscribeAllTopics = useCallback(() => {
    unsubscribeTopic(addedTaskTopic());
    unsubscribeTopic(deletedTaskTopic());
    unsubscribeTopic(addedCardTopic());
    return;
  }, [unsubscribeTopic]);

  const watcherHandler = (topic, message) => {
    dispatch({
      type: "makingWatchers",
      topic,
      data: message
    });
  };

  useEffect(() => {
    if (client) {
      client.on("connect", function() {
        console.log("MQTT connected");
        subscribeAllTopics();
      });

      client.on("message", (topic, message, packet) => {
        console.log(
          "\nMessage received on ",
          topic,
          JSON.parse(message.toString()) || "No message"
        );
        watcherHandler(
          topicsMaker.getTopicType(topic),
          JSON.parse(message.toString())
        );
      });

      client.on("reconnect", error => {
        console.log("reconnecting:", error);
      });

      client.on("error", error => {
        console.log("Connect Error:", error);
      });

      return () => {
        unsubscribeAllTopics();
      };
    }
  }, [client, subscribeAllTopics, unsubscribeAllTopics]);

  const connectMqtt = () => {
    let options = {
      port: process.env.REACT_APP_MQTT_CLIENT_PORT,
      host: process.env.REACT_APP_MQTT_HOST,
      username: process.env.REACT_APP_MQTT_USERNAME,
      password: process.env.REACT_APP_MQTT_PASSWORD,
      keepalive: 60,
      connectTimeout: 4000,
      // Client id is a token of login user
      clientId:
        "mqttjs_" +
        Math.random()
          .toString(16)
          .substr(2, 8),
      clean: false // This is for persist session
    };

    let clientConnection = MQTT.connect(
      process.env.REACT_APP_MQTT_HOST,
      options
    );
    // setClient(clientConnection)
    dispatch({
      type: "setClient",
      client: clientConnection
    });
  };

  useEffect(() => {
    connectMqtt();
  }, []);

  return (
    <mqttContext.Provider value={[state, dispatch]}>
      {props.children}
    </mqttContext.Provider>
  );
};

export { MqttProvider, mqttContext };
