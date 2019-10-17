import topicsTypes from "services/mqtt/topicsTypes";

export const initialState = {
  client: null,
  taskPubSUbEvent: {
    taskAdd: null,
    taskDelete: null,
    taskUpdate: null
  },
  cardPubSUbEvent: {
    cardAdd: null,
    cardDelete: null,
    cardUpdate: null
  }
};

export const mqttReducer = (state, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case "setClient":
      return {
        ...state,
        client: action.client
      };
    case "makingWatchers":
      switch (action.topic) {
        case topicsTypes.taskboard.task.add:
          return {
            ...state,
            taskPubSUbEvent: {
              ...state.taskPubSUbEvent,
              taskAdd: { flag: true, data: action.data }
            }
          };
        case topicsTypes.taskboard.task.delete:
          return {
            ...state,
            taskPubSUbEvent: {
              ...state.taskPubSUbEvent,
              taskDelete: { flag: true, data: action.data }
            }
          };
        case topicsTypes.taskboard.card.add:
          return {
            ...state,
            cardPubSUbEvent: {
              ...state.cardPubSUbEvent,
              cardAdd: { flag: true, data: action.data }
            }
          };
        default:
          return {
            ...state
          };
      }
    default:
      return {
        ...state
      };
  }
};
