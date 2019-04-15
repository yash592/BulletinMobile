import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";

const Routes = () => {
  console.log("router");
  return (
    <Router>
      <Scene key="auth" hideNavBar>
        <Scene key="login" component={LoginForm} />
      </Scene>
    </Router>
  );
};

export default Routes;
