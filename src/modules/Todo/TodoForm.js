import React, { useState } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { addTodos } from "../../redux/actions/todos"
import {connect} from "react-redux";

function TodoForm(props) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addTodos(description);
    
    setDescription("");
  };

  return (
    <div className="mt-3 mb-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description">Title</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Title"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup> */}
        <Button>Add Todo</Button>
      </Form>
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodos: (description) => dispatch(addTodos(description))
//   }
// }

export default connect(null, { addTodos })(TodoForm)
