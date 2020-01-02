import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Addbook.css";
import Axios from "../config/axios.setup";
import {
  Layout,
  Row,
  Col,
  Avatar,
  Input,
  Icon,
  Button,
  Card,
  Divider,
  Upload,
  Modal,
  Select,
  message
} from "antd";
const { Header, Footer, Content, Sider } = Layout;
const { TextArea } = Input;
const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
export default class Addbook extends Component {
  state = {
    visible: false,
    loading: false,
    books: [],
    book_name: "",
    book_author: "",
    typebook: ""
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  showModal = () => {
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
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <Layout>
        <Header className="navbar">
          <div className="nav-logo">
            <Link to="/store">
              <p>BOOKSWAP</p>
            </Link>
          </div>
          <div className="nav-button">
            <Button
              type="link"
              ghost
              className="navButColor"
              onClick={this.showModal}
            >
              <Icon type="shopping-cart" />
              Shopping Cart
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            <Button
              type="link"
              ghost
              className="navButColor"
              onClick={this.showModal}
            >
              <Icon type="retweet" />
              Swap Book
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            <Link to="/store">
              <Button type="link" ghost className="navButColor">
                <Icon type="shop" />
                Store
              </Button>
            </Link>
          </div>
        </Header>

        <Content>
          <Row type="flex" justify="space-between" className="content">
            <Col span={6} className="user-profile">
              <Row type="flex" justify="center" className="user-upload-mybook">
                <Avatar
                  className="profile-pic-user"
                  size={200}
                  src="https://fbi.dek-d.com/27/0282/2288/117545919"
                />
                {/* <Upload>
                  <Avatar size={200} icon="picture" />
                </Upload> */}
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <Input
                  className="input-profile-mybook-input"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <Input
                  className="input-profile-mybook-input"
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Contact"
                />
              </Row>

              <Row
                className="input-profile-mybook"
                type="flex"
                justify="center"
              >
                <TextArea
                  className="input-profile-mybook-input"
                  rows={4}
                  placeholder="Address"
                />
              </Row>

              <Row type="flex" justify="center">
                <Button>EDIT</Button>
              </Row>
            </Col>

            <Col span={17} className="user-mybook-addbook">
              <Row>
                <Divider>
                  <span className="text-addbook">ADD BOOK</span>
                </Divider>
              </Row>

              <Row type="flex" justify="center" className="border-row-addbook">
                <Col span={16} className="border-col-addbook">
                  <Row type="flex" justify="center">
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                      className="upload-picbook"
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{ width: "100%" }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Row>

                  <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    className="addbook-input"
                  >
                    <Input
                      prefix={
                        <Icon
                          type="book"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Book Name"
                    />
                  </Row>

                  <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    className="addbook-input"
                  >
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Author"
                    />
                  </Row>

                  <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    className="addbook-input"
                  >
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select Type of Book"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="fiction">Fiction</Option>
                      <Option value="business">Business</Option>
                      <Option value="education">Education</Option>
                      <Option value="diy">Diy</Option>
                      <Option value="magazine">Magazine</Option>
                    </Select>
                  </Row>

                  <Row type="flex" justify="center" align="middle">
                    <Link to="/mybook">
                      <Button className="addbook-button-cancle">CANCLE</Button>
                    </Link>

                    <Link to="/mybook">
                      <Button className="addbook-button-add">ADD</Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
