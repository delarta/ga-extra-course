const initialState = {
  data: [],
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODOS":
      return {
        ...state,
        data: payload.slice(0,10),
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter(item => item.id !== payload.id)],
      };
    case "ADD_TODOS":
      return {
        ...state,
        data: [
          { 
            title: payload,
            id: state.data.length + 1,
            completed: false
          }, ...state.data],
      };
    case "UPDATE_TODO":
      const {id, title, completed} = payload;
      return {
        ...state,
        data: [...state.data.map(item => item.id === id ? {...item, title, completed} : item)],
      };
    default:
      return state;
  }
};

export default todosReducer;
