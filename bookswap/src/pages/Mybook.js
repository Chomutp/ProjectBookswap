import React, { Component } from "react";
import "./Mybook.css";
import { Link } from "react-router-dom";
import Axios from "../config/axios.setup";
import Swaptable from "./component/Swaptable";
import LogOut from "./component/LogOut";
import { withRouter } from "react-router-dom";
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
const { Paragraph, Text } = Typography;

class Mybook extends Component {
  state = {
    visibleSwap: false,

    books: [],
    currentUser: []
  };

  fetchData = async () => {
    const { data: books } = await Axios.get(
      "/mybooks",

      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ books });

    const { data: currentUser } = await Axios.get(
      "/detailUser",

      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ currentUser });
    console.log(books);
    console.log(currentUser);
  };

  componentDidMount = () => {
    this.fetchData();
  };

  handleDeleteMybook = id => {
    console.log("book's id", id);
    Axios.delete(
      `/addbook/${id}`,

      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    )
      .then(result => {
        this.fetchData();
        console.log(`delete book's id : ${id}`);
      })

      .catch(err => console.log(err));
  };

  openSwapModal = () => {
    this.setState({ visibleSwap: true });
  };

  closeSwapModal = () => {
    this.setState({ visibleSwap: false });
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

        <Content className="c">
          <Row type="flex" justify="space-between" className="content">
            {this.state.currentUser.map(detail => (
              <Col span={6} className="user-profile">
                <Row
                  type="flex"
                  justify="center"
                  className="user-upload-mybook"
                >
                  <Avatar
                    className="profile-pic-user"
                    size={150}
                    icon="user"
                    style={{ backgroundColor: "#454f69" }}
                  />
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="user" />
                </Row>

                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code className="detail-user">
                    {detail.name}
                  </Text>
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="phone" />
                </Row>

                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code className="detail-user">
                    +66
                  </Text>{" "}
                  :
                  <Text code className="detail-user">
                    {detail.contact}
                  </Text>
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="home" />
                </Row>
                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code className="detail-user">
                    {detail.address}
                  </Text>
                </Row>

                <Row type="flex" justify="center">
                  <LogOut />
                </Row>
              </Col>
            ))}

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
                        <Paragraph ellipsis className="bookname-mybook">
                          {book.name_book}
                        </Paragraph>
                      </Row>
                      <Row type="flex" justify="center">
                        <Text code>{book.typeBook}</Text>
                      </Row>

                      <Row
                        type="flex"
                        justify="center"
                        className="ButtonDelete-card-mybook"
                      >
                        <Button
                          type="danger"
                          onClick={() => this.handleDeleteMybook(book.id)}
                        >
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
                        <Avatar
                          shape="square"
                          size={120}
                          icon="plus"
                          style={{ backgroundColor: "#66a759" }}
                        />
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

export default withRouter(Mybook);
