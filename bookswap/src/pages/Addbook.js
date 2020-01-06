import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Addbook.css";
import Axios from "../config/axios.setup";
import Swaptable from "./component/Swaptable";
import LogOut from "./component/LogOut";
import Shoppingcardtable from "./component/Shoppingcardtable";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Avatar,
  Input,
  Icon,
  Button,
  Form,
  Divider,
  Upload,
  Select,
  message,
  Typography
} from "antd";
const { Header, Footer, Content, Sider } = Layout;
const { TextArea } = Input;
const { Option } = Select;
const { Paragraph, Text } = Typography;

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
class Addbook extends Component {
  state = {
    visibleSwap: false,
    visibleShopping: false,
    loading: false,
    books: [],
    currentUser: []
  };

  componentDidMount = async () => {
    const { data: currentUser } = await Axios.get(
      "/detailUser",

      {
        headers: {
          Authorization: "Bearer " + localStorage.ACCESS_TOKEN
        }
      }
    );
    this.setState({ currentUser });
    console.log(currentUser);
  };

  handleSubmit = e => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const user = jwtDecode(token);
    console.log("user", user);
    e.preventDefault();

    this.props.form.validateFields((err, value) => {
      if (!err) {
        let payload = {
          image_book: value.image_book,
          name_book: value.name_book,
          typeBook: value.typeBook,
          user_id: user.id
        };

        Axios.post("/addbook", payload, {
          headers: {
            Authorization: "Bearer " + localStorage.ACCESS_TOKEN
          }
        })
          .then(result => {
            console.log(result.data);
            this.props.history.push("/mybook");
          })
          .catch(err => {
            console.log(err);
          });
        this.props.form.resetFields();
      }
    });
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  openSwapModal = () => {
    this.setState({ visibleSwap: true });
  };

  closeSwapModal = () => {
    this.setState({ visibleSwap: false });
  };

  openShoppingModal = () => {
    this.setState({ visibleShopping: true });
  };

  closeShoppingModal = () => {
    this.setState({ visibleShopping: false });
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    const { getFieldDecorator } = this.props.form;

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
              className="navButtonColor"
              onClick={this.openShoppingModal}
            >
              <Icon type="shopping-cart" />
              Shopping Cart
            </Button>
            <Shoppingcardtable
              visible={this.state.visibleShopping}
              closeShoppingModal={this.closeShoppingModal}
            />

            <Button
              type="link"
              ghost
              className="navButtonColor"
              onClick={this.openSwapModal}
            >
              <Icon type="retweet" />
              Swap Book
            </Button>
            <Swaptable
              visible={this.state.visibleSwap}
              closeSwapModal={this.closeSwapModal}
            />

            <Link to="/store">
              <Button type="link" ghost className="navButtonColor">
                <Icon type="shop" />
                Store
              </Button>
            </Link>
          </div>
        </Header>

        <Content>
          <Row type="flex" justify="space-between" className="content">
            {this.state.currentUser.map(detail => (
              <Col span={6} className="user-profile">
                <Row
                  type="flex"
                  justify="center"
                  className="user-upload-mybook"
                >
                  <Avatar className="profile-pic-user" size={200} icon="user" />
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="user" />
                </Row>

                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code>{detail.name}</Text>
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="phone" />
                </Row>

                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code>{detail.contact}</Text>
                </Row>

                <Row type="flex" justify="center">
                  <Icon type="home" />
                </Row>
                <Row
                  className="input-profile-mybook"
                  type="flex"
                  justify="center"
                >
                  <Text code>{detail.address}</Text>
                </Row>

                <Row type="flex" justify="center">
                  <LogOut />
                </Row>
              </Col>
            ))}

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

                  <Row type="flex" justify="center" className="addbook-input">
                    <Form
                      wrapperCol={{ span: 24 }}
                      onSubmit={this.handleSubmit}
                    >
                      <Form.Item>
                        {getFieldDecorator("image_book", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your image url"
                            }
                          ]
                        })(<Input placeholder="Image Book" />)}
                      </Form.Item>
                      <Form.Item>
                        {getFieldDecorator("name_book", {
                          rules: [
                            {
                              required: true,
                              message: "Please input name of book"
                            }
                          ]
                        })(<Input placeholder="Name's Book" />)}
                      </Form.Item>

                      <Form.Item>
                        {getFieldDecorator("typeBook", {
                          rules: [
                            {
                              required: true,
                              message: "Please select type of book"
                            }
                          ]
                        })(
                          <Select
                            placeholder="Select type of book"
                            onChange={value =>
                              this.setState({ typeBook: `${value}` })
                            }
                          >
                            <Option value="fiction">Fiction</Option>
                            <Option value="business">Business</Option>
                            <Option value="education">Education</Option>
                            <Option value="diy">Diy</Option>
                            <Option value="magazine">Magazine</Option>
                          </Select>
                        )}
                      </Form.Item>
                      <Form.Item wrapperCol={{ span: 24 }}>
                        <Link to="/mybook">
                          <Button className="addbook-button-cancle">
                            CANCLE
                          </Button>
                        </Link>

                        <Button
                          className="addbook-button-add"
                          htmlType="submit"
                        >
                          ADD
                        </Button>
                      </Form.Item>
                    </Form>
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

export default Form.create()(withRouter(Addbook));
