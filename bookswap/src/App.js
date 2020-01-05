import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoutes role={"user"} />
      </Switch>
    </div>
  );
}

export default App;
