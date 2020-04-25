import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/`,
      state: {
        username,
      },
    });
  };

  return (
    <div>
      {/* <Container
        
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <Card className="w-50">
          <CardBody>
          <Form onSubmit={handleSubmit} >
          <h1 className="mb-5">Sign In</h1>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
     
          </CardBody>
        </Card>
     
      </Container> */}

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
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
