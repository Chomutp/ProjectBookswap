import React, { Component } from "react";
import Axios from "../../config/axios.setup";
import jwtDecode from "jwt-decode";
import { Tabs, Table, Modal, Icon, Button } from "antd";

const { TabPane } = Tabs;

class Swaptable extends Component {
  state = {
    requestTo: [],
    requestFrom: [],
    requestToSwaped: [],
    swapping: []
  };

  fetchData = async () => {
    const { data: requestTo } = await Axios.get(
      "http://localhost:9999/swap-to-list",
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ requestTo });
    // console.log(requestTo);

    const { data: requestFrom } = await Axios.get(
      "http://localhost:9999/swap-from-list",
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ requestFrom });
    // console.log(requestFrom);

    const { data: requestToSwaped } = await Axios.get(
      "http://localhost:9999/swap-to-list-swaped",
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ requestToSwaped });
  };

  componentDidMount = () => {
    this.fetchData();
    var intervalId = setInterval(this.fetchData, 100000);
    this.setState({ intervalId: intervalId });
  };

  handleAccept = index => () => {
    // let user = jwtDecode(localStorage.getItem("ACCESS_TOKEN"));
    console.log(this.state.requestFrom[index]);
    Axios.put("/accept-swap/" + this.state.requestFrom[index].re, {
      headers: {
        Authorization: "Bearer " + localStorage.ACCESS_TOKEN
      }
    });
  };

  handleDeny = index => () => {
    console.log(index);
    // const { requestFrom } = this.state.requestFrom;
    console.log(this.state.requestFrom[index]);
    // console.log(requestFrom.request_from_user_id);
    Axios.delete(
      "/deny-swap/" +
        this.state.requestFrom[index].request_from_user_id +
        "/" +
        this.state.requestFrom[index].request_from_book_id +
        "/" +
        this.state.requestFrom[index].request_to_book_id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    )
      .then(result => {
        this.fetchData();
        // console.log(result2);
        // this.props.history.push("/store");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const columnsSwapRequestTo = [
      {
        title: "My Book",
        dataIndex: "mybook"
      },
      {
        title: "Swap with Book",
        dataIndex: "swapbook"
      },
      {
        title: "Swap",
        dataIndex: "swap"
      }
    ];

    const dataSwapRequestTo = this.state.requestTo.map(detail => {
      return {
        mybook: detail.request_from_book_name,
        swapbook: detail.request_to_book_name,
        swap: detail.status
      };
    });

    const columnsSwapRequestFrom = [
      {
        title: "Book's User",
        dataIndex: "bookuser"
      },

      {
        title: "My Book",
        dataIndex: "mybook"
      },
      {
        title: "Swap",
        dataIndex: "swapbook",
        render: (text, record, index) => (
          <Button type="primary" onClick={this.handleAccept(index)}>
            Accept
          </Button>
        )
      },
      {
        title: "Deny",
        dataIndex: "deny",
        render: (text, recond, index) => (
          <Button type="danger" onClick={this.handleDeny(index)}>
            Deny
          </Button>
        )
      }
    ];

    const dataSwapRequestFrom = this.state.requestFrom.map(detail => {
      return {
        bookuser: detail.request_from_book_name,
        mybook: detail.request_to_book_name,
        swapbook: "",
        deny: ""
      };
    });

    const columnsSwapRequestToSwaped = [
      {
        title: "My Book",
        dataIndex: "mybook"
      },
      {
        title: "Swap with Book",
        dataIndex: "swapbook"
      },
      {
        title: "Swap",
        dataIndex: "swap"
      }
    ];

    const dataSwapRequestToSwaped = this.state.requestToSwaped.map(detail => {
      return {
        mybook: detail.request_from_book_name,
        swapbook: detail.request_to_book_name,
        swap: detail.status
      };
    });

    console.log(this.state.requestFrom);

    return (
      <Modal
        title="SWAP BOOK"
        visible={this.props.visible}
        footer={[
          <Button type="primary" onClick={this.props.closeSwapModal}>
            OK
          </Button>
        ]}
        closable={this.props.closable}
      >
        <Tabs defaultActiveKey="1">
          <TabPane
            tab="SWAP REQUEST TO ..."
            key="1"
            tab={
              <span>
                <Icon type="arrow-up" />
                SWAP REQUEST TO ...
              </span>
            }
          >
            <div>
              <Table
                columns={columnsSwapRequestTo}
                dataSource={dataSwapRequestTo}
                size="small"
              />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="arrow-down" />
                SWAP REQUEST FROM ...
              </span>
            }
            key="2"
          >
            <div>
              <Table
                columns={columnsSwapRequestFrom}
                dataSource={dataSwapRequestFrom}
                size="small"
              />
            </div>
          </TabPane>

          <TabPane
            tab={
              <span>
                <Icon type="retweet" />
                SWAPED
              </span>
            }
            key="3"
          >
            <div>
              <Table
                columns={columnsSwapRequestToSwaped}
                dataSource={dataSwapRequestToSwaped}
                size="small"
              />
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}

Swaptable.defaultProps = {
  visible: false,
  closable: false
};

export default Swaptable;
