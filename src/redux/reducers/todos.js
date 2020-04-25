const initialState = {
  data: [],
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODOS":
      return {
        ...state,
        data: payload,
      };
    case "ADD_TODOS":
      return {
        ...state,
        data: [payload, ...state.data],
      };
    default:
      return state;
  }
};

export default todosReducer;
