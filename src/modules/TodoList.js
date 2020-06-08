import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(TodoList);
