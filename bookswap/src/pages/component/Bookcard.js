import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Icon, Row, Col, Card, Avatar, Typography } from "antd";
const { Content } = Layout;
const { Paragraph, Text } = Typography;

class Bookcard extends Component {
  render() {
    return (
      <Col xs={20} sm={20} md={10} lg={10} xl={5}>
        <Card hoverable className="card-book-store">
          <Row type="flex" justify="center" className="content-card-store">
            <Avatar shape="square" size={120} src={this.props.image_book} />
          </Row>

          <Row>
            <center>
              <Paragraph
                ellipsis
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                {this.props.name_book}
              </Paragraph>
            </center>
          </Row>

          <Row type="flex" justify="center">
            {this.props.isLogin ? (
              <Button>
                <Icon type="retweet" />
              </Button>
            ) : (
              <Text code>Please Login</Text>
            )}
          </Row>
        </Card>
      </Col>
    );
  }
}

Bookcard.defaultProps = {
  book_id: "",
  typeBook_id: 0,
  image_book:
    "https://damonza.com/wp-content/uploads/portfolio/fiction/World-Whisperer.jpg",
  name_book: "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
};

export default Bookcard;
