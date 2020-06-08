import React, { Component } from "react";
import {
  CardBody,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap";
import { connect } from "react-redux";
import { addTodos } from "../redux/actions/todos";

class TodoInput extends Component {
  state = {
    title: "",
    loading: false,
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { success } = this.props.addTodos(this.state.title);
    if (success) {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Card>
        <CardBody>
          <h2>Add Todo</h2>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
                placeholder="Type todo title"
              />
            </FormGroup>
            <Button color="primary" disabled={this.state.loading} block>
              {this.state.loading ? <Spinner size="sm" /> : "Add Todo"}{" "}
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (title) => dispatch(addTodos(title)),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
