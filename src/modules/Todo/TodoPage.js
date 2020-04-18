import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col, Alert } from "reactstrap";
import TodoForm from "./TodoForm";
import TodoUpdate from "./TodoUpdate";
export default function TodoPage() {
  const [visible, setVisible] = useState(false);

  const [alert, setAlert] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
      date: "2020-04-02",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      date: "2020-04-03",

      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      date: "2020-04-01",

      completed: false,
    },
  ]);

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
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [todos]);

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
            <th>Due</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.completed ? "True" : "False"}</td>
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
