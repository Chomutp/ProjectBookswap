import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import { Col, Row, Button } from "antd";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Row className="tap-top-bottom"></Row>

        <Row
          type="flex"
          justify="center"
          align="middle"
          className="borderWelcome"
        >
          <Col span={8}>
            <img
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/79293179_2645165115574679_4386875460080893952_n.jpg?_nc_cat=101&_nc_eui2=AeGLoF4zB5cqb_CYF4L3S_pzjxlL51a4BvSkl1MIjlBFQxhWTQDcyf5yckkHOeDtZ9EK2yt8O6s-rp17v7dUoKhL5Sh5JfPkV1PiwWdI1YC_kg&_nc_ohc=ggBboLq8HDoAQlalN93aaI04qZUjrQ9fNHF24NDopZ6NfinV8qtWTdgbg&_nc_pt=1&_nc_ht=scontent.fbkk6-2.fna&oh=40bd93c5a7e1876015e08f6d640dc8a1&oe=5E7F7396"
              width="300px"
            />
          </Col>

          <Col span={8}>
            <Row className="text-welcome">
              <p>WELCOME TO BOOKSWAP</p>
            </Row>
            <Row>
              <Link to="/register">
                <Button className="button-welcome">REGISTER</Button>
              </Link>
              <Link to="/login">
                <Button className="button-welcome">LOGIN</Button>
              </Link>
            </Row>
          </Col>
        </Row>

        <Row className="tap-top-bottom"></Row>
      </div>
    );
  }
}
