import topicsTypes from "services/mqtt/topicsTypes";
import topicsMaker from "services/mqtt/topicsMaker";

export const addedTaskTopic = () => {
  const specificID = 3; // you can use any thing specific as per requirement
  const topic = topicsMaker.setName(topicsTypes.taskboard.task.add, specificID);
  return topic;
};

export const deletedTaskTopic = () => {
  const specificID = 3; // you can use any thing specific as per requirement
  const topic = topicsMaker.setName(
    topicsTypes.taskboard.task.delete,
    specificID
  );
  return topic;
};

export const addedCardTopic = () => {
  const specificID = 3; // you can use any thing specific as per requirement
  const topic = topicsMaker.setName(topicsTypes.taskboard.card.add, specificID);
  return topic;
};

export const publishAddedTask = (client, data) => {
  console.log("publishAddedTask");
  const topic = addedTaskTopic();
  client.publish(topic, JSON.stringify(data), () => {
    console.log(`published on ${topic}`);
  });
};

export const publishDeletedTask = (client, data) => {
  const topic = deletedTaskTopic();
  client.publish(topic, JSON.stringify(data), () => {
    console.log(`published on ${topic}`);
  });
};

export const publishAddedCard = (client, data) => {
  const topic = addedCardTopic();
  client.publish(topic, JSON.stringify(data), () => {
    console.log(`published on ${topic}`);
  });
};
