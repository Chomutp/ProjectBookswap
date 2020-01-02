import React, { Component } from "react";
import { Tabs, Table, Modal } from "antd";

const { TabPane } = Tabs;

const columns = [
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
const data = [
  {
    key: "1",
    book: "Book 1",
    namebook: "Book 1",
    swap: "Progressing"
  },
  {
    key: "2",
    book: "Book 2",
    namebook: "Book 2",
    swap: "Progressing"
  },
  {
    key: "3",
    book: "Book 3",
    namebook: "Book 3",
    swap: "Progressing"
  }
];

export default class Swaptable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.hhandleCancel = this.handleCancel.bind(this);

    this.state = {
      visible: false
    };
  }

  handleShowModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="SWAP"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <div>
                <h4>Small size table</h4>
                <Table columns={columns} dataSource={data} size="small" />
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <div>
                <h4>Small size table</h4>
                <Table columns={columns} dataSource={data} size="small" />
              </div>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}
