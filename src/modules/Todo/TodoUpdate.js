import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function TodoUpdate(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // componentDidMount
  // useEffect(() => {
  //   console.log("mounted")
  // }, [])

  // ComponentDidUpdate
  // useEffect(() => {
  //   console.log("date n title render")

  // }, [date, title])

  // useEffect(() => {
  //   console.log("title render")

  // }, [title])

  // componentDidUnmount
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="mt-3 mb-3">
      <Form>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
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
