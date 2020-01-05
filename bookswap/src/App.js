import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";

import PrivateRoutes from "./routes/PrivateRoutes";

class App extends React.Component {
  getUser = () => {
    let token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      return jwtDecode(token);
    } else {
      return {
        role: "guest"
      };
    }
  };

  render() {
    let user = this.getUser();
    return (
      <div>
        <Switch>
          <PrivateRoutes role={user.role} />
        </Switch>
      </div>
    );
  }
}

export default App;
