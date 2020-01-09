import React, { Component } from "react";
import Axios from "../../config/axios.setup";
import {
  Modal,
  Button,
  Col,
  Row,
  Avatar,
  Typography,
  Card,
  message
} from "antd";
const { Paragraph, Text } = Typography;

class SelectBook extends Component {
  state = {
    books: [],
    selectBookId: undefined,
    swapToList: []
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

    // const { data: swapToList } = await Axios.get("/swap-to-list", {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.ACCESS_TOKEN
    //   }
    // });
    // this.setState({ swapToList });
  };

  success = () => {
  message.success('This is a success message');
};

  componentDidMount = () => {
    this.fetchData();
    console.log(this.props);
  };

  handleSelectBook = id => {
    console.log("select my book id :", id);

    Axios.get("/getUserByBookId/" + this.props.selectedBookId, {
      headers: {
        Authorization: "Bearer " + localStorage.ACCESS_TOKEN
      }
    })
      .then(result1 => {
        this.fetchData();
        // console.log(result1.data);
        let payload = {
          request_from_book_id: id,
          request_to_book_id: this.props.selectedBookId,
          request_to_user_id: result1.data.user_id
        };

        Axios.post("/swap-request-to", payload, {
          headers: {
            Authorization: "Bearer " + localStorage.ACCESS_TOKEN
          }
        })
          .then(result2 => {
            this.success()
            this.fetchData();
            console.log(result2);
            // this.props.history.push("/store");
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const success = () => {
      message.success("Send request already");
    };
    return (
      <Modal
        title="SELECT MY BOOK"
        visible={this.props.visible}
        footer={[
          <Button type="danger" onClick={this.props.closeSelectModal}>
            Cancel
          </Button>
        ]}
        closable={this.props.closable}
      >
        <Row type="flex" justify="center">
          {this.state.books.map(book => (
            <Card
              hoverable
              style={{ width: "200px", margin: "0 10px 10px 10px" }}
              size="small"
            >
              <Row type="flex" justify="center" className="content-card-store">
                <Avatar shape="square" size={60} src={book.image_book} />
              </Row>

              <Row>
                <center>
                  <Paragraph
                    ellipsis
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {book.name_book}
                  </Paragraph>
                </center>
              </Row>

              <Row type="flex" justify="center">
                <Button onClick={() => this.handleSelectBook(book.id)}>
                  SELECT BOOK
                </Button>
              </Row>
            </Card>
          ))}
        </Row>
      </Modal>
    );
  }
}
SelectBook.defaultProps = {
  visible: false,
  closable: false
};
export default SelectBook;
