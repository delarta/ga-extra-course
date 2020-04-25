const initialState = {
  songs_data: [],
};

const songsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_SONGS":
      return {
        ...state,
        songs_data: [payload],
      };
    case "ADD_SONGS":
      return {
        ...state,
        songs_data: [...state.songs_data, payload],
      };
    default:
      return state;
  }
};

export default songsReducer;
