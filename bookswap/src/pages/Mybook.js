import React, { Component } from "react";
import "./Mybook.css";
import { Link } from "react-router-dom";
import Axios from "../config/axios.setup";
import Swaptable from "./component/Swaptable";
import LogOut from "./component/LogOut";
import Shoppingcardtable from "./component/Shoppingcardtable";
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
  Upload,
  Modal,
  Typography
} from "antd";
const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Paragraph } = Typography;

export default class Mybook extends Component {
  state = {
    visibleSwap: false,
    visibleShopping: false,
    books: []
  };
  componentDidMount = async () => {
    const { data: books } = await Axios.get(
      "/mybooks"
      // , {
      //   headers: {
      //     Authorization: "Bearer " + localStorage.ACCESS_TOKEN
      //   }
      // }
    );
    this.setState({ books });
  };

  openSwapModal = () => {
    this.setState({ visibleSwap: true });
  };

  closeSwapModal = () => {
    this.setState({ visibleSwap: false });
  };

  openShoppingModal = () => {
    this.setState({ visibleShopping: true });
  };

  closeShoppingModal = () => {
    this.setState({ visibleShopping: false });
  };

  render() {
    return (
      <Layout>
        <Header className="navbar">
          <div className="nav-logo">
            <Link to="/store">
              <p>BOOKSWAP</p>
              <hr />
            </Link>
          </div>
          <div className="nav-button">
            <Button
              type="link"
              ghost
              className="navButtonColor"
              onClick={this.openShoppingModal}
            >
              <Icon type="shopping-cart" />
              Shopping Cart
            </Button>
            <Shoppingcardtable
              visible={this.state.visibleShopping}
              closeShoppingModal={this.closeShoppingModal}
            />

            <Button
              type="link"
              ghost
              className="navButtonColor"
              onClick={this.openSwapModal}
            >
              <Icon type="retweet" />
              Swap Book
            </Button>
            <Swaptable
              visible={this.state.visibleSwap}
              closeSwapModal={this.closeSwapModal}
            />

            <Link to="/store">
              <Button type="link" ghost className="navButtonColor">
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
                  className="profile-pic-user"
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
                  className="input-profile-mybook-input"
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
                  className="input-profile-mybook-input"
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
                <TextArea
                  className="input-profile-mybook-input"
                  rows={4}
                  placeholder="Address"
                />
              </Row>

              <Row type="flex" justify="center">
                <LogOut />
              </Row>
            </Col>

            <Col span={17} className="user-mybook">
              <Row>
                <Divider>
                  <span className="text-mybook">MY BOOKS</span>
                </Divider>
              </Row>

              <Row gutter={[48, 48]} type="flex" justify="center">
                {this.state.books.map(book => (
                  <Col xs={20} sm={20} md={20} lg={10} xl={5}>
                    <Card hoverable className="card-book-mybook">
                      <Row
                        type="flex"
                        justify="center"
                        className="content-card-mybook"
                      >
                        <Avatar
                          shape="square"
                          size={120}
                          src={book.image_book}
                        />
                      </Row>

                      <Row>
                        <Paragraph ellipsis>{book.name_book}</Paragraph>
                      </Row>

                      <Row type="flex" justify="space-around">
                        <Button type="danger">
                          <Icon type="delete" />
                        </Button>
                      </Row>
                    </Card>
                  </Col>
                ))}

                <Col xs={20} sm={20} md={20} lg={10} xl={5}>
                  <Link to="/addbook">
                    <Card hoverable className="card-book-mybook">
                      <Row
                        type="flex"
                        justify="center"
                        className="content-card-mybook"
                      >
                        <Avatar shape="square" size={120} icon="plus" />
                      </Row>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>

        <Footer>cccccc</Footer>
      </Layout>
    );
  }
}
