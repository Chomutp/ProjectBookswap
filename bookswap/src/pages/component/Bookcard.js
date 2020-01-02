import React, { Component } from "react";
import { Layout, Button, Icon, Row, Col, Card, Avatar } from "antd";
const { Content } = Layout;

export default class Bookcard extends Component {
  render() {
    return (
      <Col xs={20} sm={20} md={10} lg={10} xl={5}>
        <Card hoverable className="card-book-store">
          <Row type="flex" justify="center" className="content-card-store">
            <Avatar
              shape="square"
              size={120}
              src="https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg"
            />
          </Row>

          <Row type="flex" justify="space-around">
            <Button>
              <Icon type="shopping-cart" />
            </Button>

            <Button>
              <Icon type="retweet" />
            </Button>
          </Row>
        </Card>
      </Col>
    );
  }
}
