import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Swap.css";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default class Swap extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
