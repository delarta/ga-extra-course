import axios from "axios";
const urlAPI = "https://jsonplaceholder.typicode.com";

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
        dispatch({
          type: "GET_TODOS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addTodos = (title) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TODOS",
      payload: title,
    });
    return { success: true };
  };
};

export const updateTodo = ({ id, title, completed }) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id, title, completed },
    });
    console.log(completed);
    return { success: true };
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
    return { success: true };
  };
};
