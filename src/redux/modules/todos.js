// Action value
const SUBMIT = "SUBMIT";
const CHANGE_DONE = "CHANGE_DONE";
const DELETE_LIST = "DELETE_LIST";

// Action Creator
export const submit = (title, desc) => {
  return {
    type: SUBMIT,
    title,
    desc,
  };
};

export const changeDone = (id) => {
  return {
    type: CHANGE_DONE,
    id,
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE_LIST,
    id,
  };
};

// Initial state
const initialState = {
  lists: [],
};

// Reducer
const todoLists = (state = initialState, action) => {
  const newTodoLists = {
    id: Date.now(),
    title: action.title,
    desc: action.desc,
    isDone: false,
  };

  switch (action.type) {
    case "SUBMIT":
      return {
        lists: [...state.lists, newTodoLists],
      };
    case "CHANGE_DONE":
      return {
        lists: state.lists.map((list) => ({
          ...list,
          isDone: list.id === action.id ? !list.isDone : list.isDone,
        })),
      };
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.id),
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoLists;
