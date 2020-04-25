const initialState = {
  movies_data: [],
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies_data: payload,
      };
    case "GET_SONGS":
      return {
        ...state,
        movies_data: payload,
      };
    case "ADD_MOVIES":
      return {
        ...state,
        movies_data: [...state.movies_data, payload],
      };
    default:
      return state;
  }
};

export default moviesReducer;
