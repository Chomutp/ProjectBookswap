import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Addbook.css";
import {
  Layout,
  Row,
  Col,
  Avatar,
  Input,
  Icon,
  Button,
  Card,
  Divider,
  Upload
} from "antd";
const { Header, Footer, Content, Sider } = Layout;
const { TextArea } = Input;

export default class Addbook extends Component {
  render() {
    return (
      <Layout>
        <Header className="navbar">
          <div className="nav-logo">
            <Link to="/store">
              <p>BOOKSWAP</p>
            </Link>
          </div>
          <div className="nav-button">
            <Link to="/shoppingcart">
              <Button type="link" ghost>
                <Icon type="shopping-cart" />
                Shopping Cart
              </Button>
            </Link>

            <Link to="/swap">
              <Button type="link" ghost>
                <Icon type="retweet" />
                Swap Book
              </Button>
            </Link>

            <Link to="/store">
              <Button type="link" ghost>
                <Icon type="shop" />
                Store
              </Button>
            </Link>
          </div>
        </Header>

        <Content>
          <Row type="flex" justify="space-between" className="content-addbook">
            <Col span={6} className="user-profile-addbook">
              <Row>
                <Upload>
                  <Avatar size={200} icon="picture" />
                </Upload>
              </Row>

              <Row>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Row>

              <Row>
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Contact"
                />
              </Row>

              <Row>
                <TextArea rows={4} placeholder="Address" />
              </Row>

              <Row>
                <Button>EDIT</Button>
              </Row>
            </Col>

            <Col span={17} className="user-mybook-addbook">
              <Row>
                <Divider>MY BOOKS</Divider>
              </Row>

              <Row type="flex" justify="center" className="border-row-addbook">
                <Col span={16} className="border-col-addbook">
                  <Row type="flex" justify="center" align="middle">
                    <Upload>
                      <Avatar size={200} icon="picture" shape="square" />
                    </Upload>
                  </Row>

                  <Row type="flex" justify="center" align="middle">
                    <Input placeholder="Book Name" />
                  </Row>

                  <Row type="flex" justify="center" align="middle">
                    <Input placeholder="Author" />
                  </Row>

                  <Row type="flex" justify="center" align="middle">
                    <Input placeholder="Book Detail" />
                  </Row>

                  <Row type="flex" justify="center" align="middle">
                    <Link to="/mybook">
                      <Button className="addbook-button-cancle">CANCLE</Button>
                    </Link>

                    <Link to="/mybook">
                      <Button className="addbook-button-add">ADD</Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
