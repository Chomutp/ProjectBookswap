import React, { Component } from "react";
import { Tabs, Table, Modal, Icon, Button } from "antd";

const { TabPane } = Tabs;

const columnsSwapRequestTo = [
  {
    title: "My Book",
    dataIndex: "mybook"
    // render: mybook => {}
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

const dataSwapRequestTo = [
  {
    key: "1",
    mybook: "Book 1",
    swapbook: "Book 2",
    swap: "xxxx"
  },
  {
    key: "2",
    mybook: "Book 3",
    swapbook: "Book 4",
    swap: "yyyyyy"
  }
];

const columnsSwapRequestFrom = [
  {
    title: "Book",
    dataIndex: "book"
  },
  {
    title: "Name's Book",
    dataIndex: "namebook"
  },
  {
    title: "Swap",
    dataIndex: "swap",
    render: (text, record) => <Button type="primary">Select Book</Button>
  },
  {
    title: "Deny",
    dataIndex: "deny",
    render: (text, record) => <Button type="danger">Deny</Button>
  }
];
const dataSwapRequestFrom = [
  {
    key: "1",
    book: "Book 1",
    namebook: "Book 1",
    swap: "",
    deny: ""
  },
  {
    key: "2",
    book: "Book 2",
    namebook: "Book 2",
    swap: "",
    deny: ""
  }
];

class Swaptable extends Component {
  render() {
    // const data = this.state.requests.map((request, index) => ({
    //   key: index+1,
    //   mybook: request.
    // }))
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
