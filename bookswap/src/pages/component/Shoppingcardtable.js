import React, { Component } from "react";
import { Tabs, Table, Modal, Button } from "antd";

const { TabPane } = Tabs;

const columnsShopping = [
  {
    title: "Book",
    dataIndex: "book"
  },
  {
    title: "Name's Book",
    dataIndex: "namebook"
  },
  {
    title: "Price",
    dataIndex: "price"
  }
];
const dataShopping = [
  {
    key: "1",
    book: "Book 1",
    namebook: "Book 1",
    price: "100 Bath"
  },
  {
    key: "2",
    book: "Book 2",
    namebook: "Book 2",
    price: "200 Bath"
  }
];

class Shoppingcardtable extends Component {
  render() {
    return (
      <Modal
        title="SHOPPING CART"
        visible={this.props.visible}
        footer={[
          <Button type="primary" onClick={this.props.closeShoppingModal}>
            OK
          </Button>
        ]}
        closable={this.props.closable}
      >
        <Table
          columns={columnsShopping}
          dataSource={dataShopping}
          size="small"
        />
      </Modal>
    );
  }
}
Shoppingcardtable.defaultProps = {
  visible: false,
  closable: false
};
export default Shoppingcardtable;
