const taskList = [
  {
    id: 1,
    title: "Doing Design",
    cardId: 1
  },
  {
    id: 2,
    title: "Making API",
    cardId: 1
  },
  {
    id: 3,
    title: "Bug Fixing",
    cardId: 2
  },
  {
    id: 4,
    title: "Code testing",
    cardId: 2
  }
];

const cardList = [
  {
    id: 1,
    title: "Phase 1"
  },
  {
    id: 2,
    title: "Phase 2"
  },
  {
    id: 3,
    title: "Phase 3"
  }
];

export const initialState = {
  cards: cardList,
  tasks: taskList
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.data]
      };
    case "cardAdd":
      return {
        ...state,
        cards: [...state.cards, action.data]
      };
    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter(a => a.id !== action.data.id)
      };
    default:
      return {
        ...state
      };
  }
};
