import React, { useState } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title, date);
    setTitle("");
    setDate("");
  };

  return (
    <div className="mt-3 mb-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <Button>Add Todo</Button>
      </Form>
    </div>
  );
}
