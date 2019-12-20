import React, { Component } from "react";
import "./Mybook.css";
import { Link } from "react-router-dom";
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

export default class Mybook extends Component {
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
              <Button type="link" ghost className="navButColor">
                <Icon type="shopping-cart" />
                Shopping Cart
              </Button>
            </Link>

            <Link to="/swap">
              <Button type="link" ghost className="navButColor">
                <Icon type="retweet" />
                Swap Book
              </Button>
            </Link>

            <Link to="/store">
              <Button type="link" ghost className="navButColor">
                <Icon type="shop" />
                Store
              </Button>
            </Link>
          </div>
        </Header>

        <Content>
          <Row type="flex" justify="space-between" className="content">
            <Col span={6} className="user-profile">
              <Row type="flex" justify="center" className="user-upload-mybook">
                <Avatar
                  size={200}
                  src="https://fbi.dek-d.com/27/0282/2288/117545919"
                />
                {/* <Upload>
                  <Avatar size={200} icon="picture" />
                </Upload> */}
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Contact"
                />
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <TextArea rows={4} placeholder="Address" />
              </Row>

              <Row type="flex" justify="center">
                <Button>EDIT</Button>
              </Row>
            </Col>

            <Col span={17} className="user-mybook">
              <Row>
                <Divider>
                  <p>MY BOOKS</p>
                </Divider>
              </Row>

              <Row gutter={[48, 48]} type="flex" justify="center">
                <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                  <Card hoverable>
                    <Row
                      type="flex"
                      justify="center"
                      className="content-card-mybook"
                    >
                      <Avatar
                        shape="square"
                        size={120}
                        src="https://pngimage.net/wp-content/uploads/2018/05/book-mockup-png-3.png"
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

                <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                  <Card hoverable>
                    <Row
                      type="flex"
                      justify="center"
                      className="content-card-mybook"
                    >
                      <Avatar
                        shape="square"
                        size={120}
                        src="https://pngimage.net/wp-content/uploads/2018/05/book-mockup-png-3.png"
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

                <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                  <Card hoverable>
                    <Row
                      type="flex"
                      justify="center"
                      className="content-card-mybook"
                    >
                      <Avatar
                        shape="square"
                        size={120}
                        src="https://pngimage.net/wp-content/uploads/2018/05/book-mockup-png-3.png"
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
              </Row>
            </Col>
          </Row>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
