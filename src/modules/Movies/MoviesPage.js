import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Container, Button } from "reactstrap";
import { connect } from "react-redux";

import { getAllMovies, addMovies } from "../../redux/actions/moviesAction";
import { getAllTodos } from "../../redux/actions/todos";

function MoviesPage(props) {
  const [films, setFilms] = useState([]);
  const [todos, setTodos] = useState([]);
  const history = useHistory();
  useEffect(() => {
    props.getAllTodos()
  },[])

  useEffect(() => {
    setTodos(props.todos)
  }, [props.todos])

  useEffect(() => {
    setFilms(props.movies);
  }, [props.movies]);

  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Release Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {films.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.director}</td>
                <td>{item.release_date}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() =>
                      history.push({
                        pathname: `/movies/detail?id=${item.id}`,
                      })
                    }
                  >
                    View More
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          color="primary"
          className="mr-3"
          onClick={() => props.getAllMovies()}
        >
          Get Movies
        </Button>
        <Button color="success" onClick={() => props.addMovies()}>
          Add Movies
        </Button>


        <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item._id}>
              <td>{item.description}</td>
              <td>{new Date(item.createdAt).toDateString()}</td>
              <td>{item.done ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies_data,
  todos: state.todos.data
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllMovies: () => dispatch(getAllMovies()),
//     addMovies: () => dispatch(addMovies()),
//   };
// };

export default connect(mapStateToProps, {getAllMovies, addMovies, getAllTodos})(MoviesPage);
