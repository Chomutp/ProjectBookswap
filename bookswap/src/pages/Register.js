import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Axios from "../config/axios.setup";
import { withRouter } from "react-router-dom";
import { Row, Col, Icon, Button, Input, Form } from "antd";

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/register", {
          username: value.username,
          password: value.password,
          name: value.name,
          contact: value.contact,
          address: value.address
        })
          .then(result => {
            console.log(result);
            this.props.history.push("/login");
          })
          .catch(err => {
            console.error(err);
          });
        this.props.form.resetFields();
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row className="tap-top-bottom"></Row>

        <Row
          type="flex"
          justify="center"
          align="middle"
          className="borderRegister"
        >
          <Col span={8}>
            <img
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/79293179_2645165115574679_4386875460080893952_n.jpg?_nc_cat=101&_nc_eui2=AeGLoF4zB5cqb_CYF4L3S_pzjxlL51a4BvSkl1MIjlBFQxhWTQDcyf5yckkHOeDtZ9EK2yt8O6s-rp17v7dUoKhL5Sh5JfPkV1PiwWdI1YC_kg&_nc_ohc=ggBboLq8HDoAQlalN93aaI04qZUjrQ9fNHF24NDopZ6NfinV8qtWTdgbg&_nc_pt=1&_nc_ht=scontent.fbkk6-2.fna&oh=40bd93c5a7e1876015e08f6d640dc8a1&oe=5E7F7396"
              width="300px"
            />
          </Col>

          <Col span={8}>
            <Row className="text-register">
              <span>
                <Icon type="minus" />
              </span>
              &nbsp;
              <span>REGISTER</span>
              &nbsp;
              <span>
                <Icon type="minus" />
              </span>
            </Row>

            <Row>
              <Form wrapperCol={{ span: 24 }} onSubmit={this.handleSubmit}>
                <Form.Item>
                  {getFieldDecorator("name", {
                    rules: [
                      { required: true, message: "Please input your name" }
                    ]
                  })(
                    <Input
                      placeholder="Name"
                      prefix={
                        <Icon
                          type="edit"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your username" }
                    ]
                  })(
                    <Input
                      placeholder="Username"
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("contact", {
                    rules: [{ required: true, message: "Please input contact" }]
                  })(
                    <Input
                      placeholder="Contact : e.g. 0987654321"
                      prefix={
                        <Icon
                          type="phone"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("address", {
                    rules: [
                      { required: true, message: "Please input your address" }
                    ]
                  })(
                    <Input
                      placeholder="Address"
                      prefix={
                        <Icon
                          type="home"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your password" }
                    ]
                  })(
                    <Input
                      placeholder="Password"
                      type="password"
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password again"
                      }
                    ]
                  })(
                    <Input
                      placeholder="Confirm password"
                      type="password"
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  )}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                  <Button className="button-register" htmlType="submit">
                    REGISTER
                  </Button>
                </Form.Item>
              </Form>
            </Row>

            <Row>
              <p className="text-account">
                You have an account? <Link to="/login">Login Now</Link>
              </p>
            </Row>
          </Col>
        </Row>

        <Row className="tap-top-bottom"></Row>
      </div>
    );
  }
}

export default Form.create()(withRouter(Register));
