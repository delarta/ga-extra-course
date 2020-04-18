import React, { Component } from "react";

export default class TodoClass extends Component {
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

  handleAddTodo = () => {
    const newTodo = {
      id: 4,
      title: "New Todo",
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div>
        <h1>Todo class</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "True" : "False"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => this.handleAddTodo()}>Add Todo</button>
      </div>
    );
  }
}
