import React, { Component } from "react";
import "./Mybook.css";
import { Link } from "react-router-dom";
import Swaptable from "./component/Swaptable";
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
    visible: false,
    userBook: [
      {
        id: 1,
        image_book:
          "http://www.znipertrade.com/wp-content/uploads/2016/11/Cover-E-book-2.png",
        name_book: "คัมภีร์พิชิตตลาด Forex ด้วย Price Action"
      },
      {
        id: 2,
        image_book:
          "https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786167890753.png",
        name_book: "คู่มือเทรด FOREX เข้าใจง่ายทำเงินได้จริง"
      },
      {
        id: 3,
        image_book:
          "https://www.nopadolstory.com/wp-content/uploads/2019/11/The-Little-Book-of-Man-United.jpg",
        name_book: "The Little Book of Man United"
      }
    ]
  };

  openModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
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
            <Button type="link" ghost className="navButtonColor">
              <Icon type="shopping-cart" />
              Shopping Cart
            </Button>
            <Button
              type="link"
              ghost
              className="navButtonColor"
              onClick={this.openModal}
            >
              <Icon type="retweet" />
              Swap Book
            </Button>
            <Swaptable
              visible={this.state.visible}
              closeModal={this.closeModal}
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
                <Button>EDIT</Button>
              </Row>
            </Col>

            <Col span={17} className="user-mybook">
              <Row>
                <Divider>
                  <span className="text-mybook">MY BOOKS</span>
                </Divider>
              </Row>

              <Row gutter={[48, 48]} type="flex" justify="center">
                {this.state.userBook.map(book => {
                  return (
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
                  );
                })}

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
