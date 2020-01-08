import React, { Component } from "react";
import Axios from "../../config/axios.setup";
import { Tabs, Table, Modal, Icon, Button } from "antd";

const { TabPane } = Tabs;

class Swaptable extends Component {
  state = {
    requestTo: [],
    requestFrom: []
  };

  componentDidMount = async () => {
    const { data: requestTo } = await Axios.get(
      "http://localhost:9999/swap-to-list",
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ requestTo });
    console.log(requestTo);

    const { data: requestFrom } = await Axios.get(
      "http://localhost:9999/swap-from-list",
      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ requestFrom });
    console.log(requestFrom);
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
        title: "Swap",
        dataIndex: "swapbook",
        render: (text, record) => <Button type="primary">Accept</Button>
      },
      {
        title: "My Book",
        dataIndex: "mybook"
      },
      {
        title: "Deny",
        dataIndex: "deny",
        render: (text, record) => <Button type="danger">Deny</Button>
      }
    ];

    const dataSwapRequestFrom = this.state.requestFrom.map(detail => {
      return {
        bookuser: detail.request_from_book_name,
        swapbook: "",

        mybook: detail.request_to_book_name,
        deny: ""
      };
    });

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
