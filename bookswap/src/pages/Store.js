import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import { Layout, Button, Icon, Row, Col, Card, Avatar } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default class Store extends Component {
  render() {
    return (
      <Layout>
        <Sider
          className="sider-store"
          width="350"
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Row type="flex" justify="center">
            <img
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/79293179_2645165115574679_4386875460080893952_n.jpg?_nc_cat=101&_nc_eui2=AeGLoF4zB5cqb_CYF4L3S_pzjxlL51a4BvSkl1MIjlBFQxhWTQDcyf5yckkHOeDtZ9EK2yt8O6s-rp17v7dUoKhL5Sh5JfPkV1PiwWdI1YC_kg&_nc_ohc=ggBboLq8HDoAQlalN93aaI04qZUjrQ9fNHF24NDopZ6NfinV8qtWTdgbg&_nc_pt=1&_nc_ht=scontent.fbkk6-2.fna&oh=40bd93c5a7e1876015e08f6d640dc8a1&oe=5E7F7396"
              width="200px"
            />
          </Row>

          <Row type="flex" justify="center">
            <Col span={20} className="nav-typebook-store">
              <Row type="flex" justify="center">
                <Button type="primary" icon="book" shape="round" size="large">
                  FICTION
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button type="primary" icon="book" shape="round" size="large">
                  BUSINESS
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button type="primary" icon="book" shape="round" size="large">
                  EDUCATION
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button type="primary" icon="book" shape="round" size="large">
                  DIY
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button type="primary" icon="book" shape="round" size="large">
                  MAGAZINE
                </Button>
              </Row>
            </Col>
          </Row>
        </Sider>

        <Layout className="store-right">
          <Header className="nav-navbar-store">
            <div className="nav-button-store">
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

              <Link to="/mybook">
                <Button type="link" ghost>
                  <Icon type="home" />
                  Home
                </Button>
              </Link>
            </div>
          </Header>

          <Content className="content-store">
            <Row gutter={[30, 24]} type="flex" justify="center">
              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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
              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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
            </Row>

            <Row gutter={[30, 24]} type="flex" justify="center">
              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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
              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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

              <Col xs={20} sm={20} md={10} lg={10} xl={5}>
                <Card hoverable>
                  <Row
                    type="flex"
                    justify="center"
                    className="content-card-store"
                  >
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
            </Row>
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
