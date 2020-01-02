import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Swap.css";
import { Layout, Button, Row, Col, Card, Avatar } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default class Swap extends Component {
  state = {};

  render() {
    return (
      <Row>
        <Col span={8}>
          {this.state.storeTypes.map(typeBooks => {
            return (
              <Button key={typeBooks.typeBook_id}>{typeBooks.name_type}</Button>
            );
          })}
        </Col>

        <Col span={8}>
          {this.state.storeBook.map(book => {
            return (
              <Card style={{ width: 300 }}>
                <Avatar shape="square" size={120} src={book.image_book} />
                <p ellipsis>{book.name_book}</p>
              </Card>
            );
          })}
        </Col>
      </Row>
    );
  }
}
