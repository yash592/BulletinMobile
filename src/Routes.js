import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import NewsDetail from "./components/NewsDetail/NewsDetail";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} />
        </Scene>
        <Scene key="home" hideNavBar>
          <Scene key="home" component={Home} />
        </Scene>
        <Scene key="main" hideNavBar initial>
          <Scene key="newsdetail" component={NewsDetail} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
