import React, { Component } from "react";
import { Tabs, Table, Modal, Icon, Button } from "antd";

const { TabPane } = Tabs;

const columnsSwapRequestTo = [
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
    dataIndex: "swap"
  }
];
const dataSwapRequestTo = [
  {
    key: "1",
    book: "Book 1",
    namebook: "Book 1",
    swap: "xxxx"
  },
  {
    key: "2",
    book: "Book 2",
    namebook: "Book 2",
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
  }
];
const dataSwapRequestFrom = [
  {
    key: "1",
    book: "Book 1",
    namebook: "Book 1",
    swap: ""
  },
  {
    key: "2",
    book: "Book 2",
    namebook: "Book 2",
    swap: ""
  }
];

class Swaptable extends Component {
  render() {
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
