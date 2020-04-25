import axios from "axios";
const urlAPI = "http://localhost:5000";

export const getAllTodos = () => {
  return (dispatch) => {
    // hal lain
    axios({
      url: `${urlAPI}/todos`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_TODOS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addTodos = (description) => {
  return dispatch => {
    axios({
      url: `${urlAPI}/todos/add`,
      method: "POST",
      data: {
        description
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      console.log(res)
      dispatch({
        type: "ADD_TODOS",
        payload: res.data.data
      })
    })
    .catch(err => console.log(err.response))
  }
};
