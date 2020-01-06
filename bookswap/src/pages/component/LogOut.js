import React, { Component } from "react";
import { Button } from "antd";
export default class LogOut extends Component {
  handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
  };
  render() {
    return (
      <div>
        <Button onClick={() => this.handleLogout()}>Log Out</Button>
      </div>
    );
  }
}
