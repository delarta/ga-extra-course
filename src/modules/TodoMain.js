import React, { Component } from "react";

// import connect to connect redux with this component
import { connect } from "react-redux";

// import action
import { getAllTodos } from "../redux/actions/todos";
import TodoList from "./TodoList";
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import TodoInput from "./TodoInput";

class TodoClass extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
      {
        id: 3,
        title: "Task 3",
        completed: false,
      },
    ],
  };

  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    return (
      <div className="todo-main">
        <Container
          className="todo-container"
          style={{ height: "100vh", display: "flex", alignItems: "center" }}
        >
          <Row style={{width:"100%"}}>
            <Col md="8" lg="8">
              <Card style={{ maxHeight: "80vh", overflow: "scroll" }}>
                <CardBody>
                  <TodoList />
                </CardBody>
              </Card>
            </Col>
            <Col md="4" lg="4">
              <TodoInput />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: () => dispatch(getAllTodos()),
  };
};

export default connect(null, mapDispatchToProps)(TodoClass);
