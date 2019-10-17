import join from "lodash/join";

class TopicMaker {
  setName(...parameters) {
    return join(parameters, "/");
  }
  getTopicType(topicname) {
    return topicname.split("/")[0];
  }
}

export default new TopicMaker();
