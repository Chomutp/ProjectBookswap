import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Icon } from "antd";
import "./Login.css";
import Axios from "../config/axios.setup";
import {
  successLoginNotification,
  failLoginNotification
} from "../component/Notification/Notification";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    // e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    Axios.post("/login", { username, password })
      .then(result => {
        console.log(result);
        successLoginNotification();
        localStorage.setItem("ACCESS_TOKEN", result.data.token);
        this.props.history.push("/mybook");
        window.location.reload(true);
      })
      .catch(err => {
        console.error(err);
        failLoginNotification("something went wrong");
      });
  };

  render() {
    return (
      <div>
        <Row className="tap-top-bottom"></Row>

        <Row
          type="flex"
          justify="center"
          align="middle"
          className="borderLogin"
        >
          <Col span={8}>
            <img
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/79293179_2645165115574679_4386875460080893952_n.jpg?_nc_cat=101&_nc_eui2=AeGLoF4zB5cqb_CYF4L3S_pzjxlL51a4BvSkl1MIjlBFQxhWTQDcyf5yckkHOeDtZ9EK2yt8O6s-rp17v7dUoKhL5Sh5JfPkV1PiwWdI1YC_kg&_nc_ohc=ggBboLq8HDoAQlalN93aaI04qZUjrQ9fNHF24NDopZ6NfinV8qtWTdgbg&_nc_pt=1&_nc_ht=scontent.fbkk6-2.fna&oh=40bd93c5a7e1876015e08f6d640dc8a1&oe=5E7F7396"
              width="300px"
            />
          </Col>

          <Col span={8}>
            <Row className="text-login">
              <span>
                <Icon type="minus" />
              </span>
              &nbsp;
              <span>Login</span>
              &nbsp;
              <span>
                <Icon type="minus" />
              </span>
            </Row>

            <Row className="input-login">
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </Row>
            <Row className="input-login">
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Row>

            <Row>
              <Button onClick={this.handleSubmit} className="button-login">
                LOGIN
              </Button>
            </Row>

            <Row>
              <p className="text-account">
                Don't have an account?{" "}
                <Link to="/register">Create one now</Link>
              </p>
            </Row>
          </Col>
        </Row>

        <Row className="tap-top-bottom"></Row>
      </div>
    );
  }
}
