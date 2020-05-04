import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios"

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8000/user/login",
      method: "POST",
      data: {
        email,
        password
      },
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res => {
      // to store token data from backend, use localStorage.
      // localStorage will "save" your data in browser as long as you don't clear it
      // setItem method is to set the variable inside localStorage, it takes 2 parameter, key and value
      localStorage.setItem("token", res.data);

      // redirect you to component that has route path === /
      history.push("/");
    })
    .catch(err => {
      console.log("fail")
    })
  };

  return (
    <div>

      <Row style={{ height: "100vh" }} className="no-gutters">
        <Col lg={8}>
          <div
            className="bg-primary h-100"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-75">
              <h1 className="text-white font-weight-bold display-2">
                Who Controls The Words, Controls Your Thoughts.
              </h1>
              <p className="text-white-50 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <Container
            className="h-100"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form onSubmit={handleSubmit} className="w-75">
              <h1 className="mb-5">Sign In</h1>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Remember Me
                </Label>
              </FormGroup>
              <Button block color="primary" className="mt-3">
                Sign In
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
