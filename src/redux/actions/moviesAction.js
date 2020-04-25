import axios from "axios";
const urlAPI = "https://ghibliapi.herokuapp.com";

export const getAllMovies = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_LOADING"
    });
    // thunk
    axios({
      url: `${urlAPI}/films`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({
          type: "GET_MOVIES",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addMovies = () => {
  return {
    type: "ADD_MOVIES",
    payload: {
      id: 4,
      title: "New Movie",
      director: "Mr Yeye",
      release_date: "2020-09-09",
    },
  };
};
