import React, { useState, useEffect } from "react";
import { List, Row, Col, Form, Input, Button, Checkbox } from "antd";
import axios from "axios";

function CartAnt(props) {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  const urlAPI = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios({
      method: "GET",
      url: urlAPI,
    }).then((res) => {
      setTodos(res.data.slice(0, 10));
    });
  }, []);

  const onFinish = (values) => {
    const newData = {
      userId: 1,
      id: todos.length + 1,
      title: values.title,
      completed: false,
    };
    setTodos([newData, ...todos]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDeleteTodo = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
  };

  const onFinishUpdate = (values) => {
    setTodos([
      ...todos.map((item) =>
        item.id === Number(values.id) ? {
          ...item,
          title: values.title

        }
        : item
      ),
    ]);
  };

  return (
    <div style={{ width: "90vw", margin: "0 auto" }}>
      <Row>
        <Col span={16}>
          <List
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.completed ? "Completed" : "On Progress"}
                />
                <Button
                  color="danger"
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  Delete
                </Button>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8} style={{ paddingLeft: "1em" }}>
          <h1>Add Todos</h1>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            hideRequiredMark
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          <h1>Update Todos</h1>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinishUpdate}
            onFinishFailed={onFinishFailed}
            hideRequiredMark
          >
            <Form.Item
              label="ID"
              name="id"
              rules={[{ required: true, message: "Please input your Id!" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CartAnt;
