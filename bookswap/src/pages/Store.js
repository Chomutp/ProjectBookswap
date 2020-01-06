import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "../config/axios.setup";
import "./Store.css";
import { Layout, Button, Icon, Row, Col, Card, Avatar, Modal } from "antd";
import Bookcard from "./component/Bookcard";
import Swaptable from "./component/Swaptable";
import Shoppingcardtable from "./component/Shoppingcardtable";
const { Header, Footer, Sider, Content } = Layout;

export default class Store extends Component {
  state = {
    visibleSwap: false,
    visibleShopping: false,
    books: [],
    filterType: "all"
  };

  componentDidMount = async () => {
    const { data: books } = await Axios.get("http://localhost:9999/books");
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

  filterBy = bookType => {
    this.setState({ filterType: bookType });
  };

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
            <a href="/store">
              <img
                src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/79293179_2645165115574679_4386875460080893952_n.jpg?_nc_cat=101&_nc_eui2=AeGLoF4zB5cqb_CYF4L3S_pzjxlL51a4BvSkl1MIjlBFQxhWTQDcyf5yckkHOeDtZ9EK2yt8O6s-rp17v7dUoKhL5Sh5JfPkV1PiwWdI1YC_kg&_nc_ohc=ggBboLq8HDoAQlalN93aaI04qZUjrQ9fNHF24NDopZ6NfinV8qtWTdgbg&_nc_pt=1&_nc_ht=scontent.fbkk6-2.fna&oh=40bd93c5a7e1876015e08f6d640dc8a1&oe=5E7F7396"
                width="200px"
              />
            </a>
          </Row>

          <Row type="flex" justify="center">
            <Col span={20} className="nav-typebook-store">
              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("all")}
                >
                  All BOOKS
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("fiction")}
                >
                  FICTION
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("business")}
                >
                  BUSINESS
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("education")}
                >
                  EDUCATION
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("diy")}
                >
                  DIY
                </Button>
              </Row>

              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  icon="book"
                  shape="round"
                  size="large"
                  className="nav-typebook-color"
                  onClick={() => this.filterBy("magazine")}
                >
                  MAGAZINE
                </Button>
              </Row>
            </Col>
          </Row>
        </Sider>

        <Layout className="store-right">
          <Header className="nav-navbar-store">
            <div className="nav-button-store">
              <Button
                type="link"
                ghost
                onClick={this.showModal}
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
                onClick={this.showModal}
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

              <Link to="/mybook">
                <Button type="link" ghost className="navButtonColor">
                  <Icon type="book" />
                  Mybook
                </Button>
              </Link>
            </div>
          </Header>

          <Content className="content-store">
            <Row gutter={[30, 24]} type="flex" justify="center">
              {this.state.filterType === "all" &&
                this.state.books.map(book => (
                  <Bookcard
                    book_id={book.book_id}
                    typeBook={book.typeBook}
                    image_book={book.image_book}
                    name_book={book.name_book}
                    key={book.book_id}
                  />
                ))}

              {this.state.filterType !== "all" &&
                this.state.books
                  .filter(book => book.typeBook === this.state.filterType)
                  .map(book => (
                    <Bookcard
                      book_id={book.book_id}
                      typeBook={book.typeBook}
                      image_book={book.image_book}
                      name_book={book.name_book}
                      key={book.book_id}
                    />
                  ))}
            </Row>
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
