import React, { Component } from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
class LogOut extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <Button type="danger" onClick={this.handleLogout}>
          Log Out
        </Button>
      </div>
    );
  }
}

export default withRouter(LogOut);
