import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col, Alert } from "reactstrap";
import TodoForm from "./TodoForm";
import TodoUpdate from "./TodoUpdate";

import { connect } from "react-redux";

import { getAllTodos } from "../../redux/actions/todos";

function TodoPage(props) {
  const [visible, setVisible] = useState(false);

  const [alert, setAlert] = useState(false);

  const [todos, setTodos] = useState([]);

  const handleAdd = (title, date) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      date: date,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    props.getAllTodos();
  }, []);

  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos]);

  // useEffect(() => {
  //   setAlert(true);

  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, [todos]);

  return (
    <Container className="pt-3 pb-5">
      <h1>Todo Hooks</h1>

      <TodoForm addTodo={handleAdd} />
      <Alert isOpen={alert} color="success">
        Todos Added
      </Alert>
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
      <Row>
        <Col md={4}>
          <Button onClick={() => setVisible(!visible)}>Set Visible</Button>
        </Col>
        <Col md={8}>{visible && <TodoUpdate />}</Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps, { getAllTodos })(TodoPage);
