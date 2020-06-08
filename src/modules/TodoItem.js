import React, { Component } from "react";
import { ListGroupItem, Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/actions/todos";

class TodoItem extends Component {
  state = {
    edit: false,
    title: "",
    completed: false,
  };
  componentDidMount() {
    this.setState({ title: this.props.title, completed: this.props.completed });
  }

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  };

  handleEdit = (e) => {
    e.preventDefault();
    const updatedData = {
      id: this.props.id,
      title: this.state.title,
      completed: this.state.completed,
    }
    const { success } = this.props.updateTodo(updatedData);

    if (success) {
      this.setState({ edit: !this.state.edit });
    }
  };

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.id);

  }
  render() {
    const { id, completed, title } = this.props;
    return (
      <ListGroupItem
        key="id"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ maxWidth: "300px" }}>
          {this.state.edit ? (
            <>
              <Form onSubmit={this.handleEdit}>
                <Input
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
                <Input
                  type="select"
                  onChange={(e) => { 
                    console.log(e.target.value)
                    this.setState({ completed: e.target.value })}}
                  defaultValue={completed}
                >
                  <option value={true}>Completed</option>
                  <option value={false}>On Progress</option>
                </Input>
                <Button color="primary">Save</Button>
              </Form>
            </>
          ) : (
            <>
              <h4>{title}</h4>
              <small className="text-secondary">
                {completed ? "Completed" : "On Progress"}
              </small>
            </>
          )}
        </div>
        <div>
          <Button
            className="mr-2"
            size="sm"
            onClick={this.toggleEdit}
            color="warning"
          >
            Edit
          </Button>
          <Button onClick={this.handleDelete} size="sm" color="danger">
            Delete
          </Button>
        </div>
      </ListGroupItem>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (data) => dispatch(updateTodo(data)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
