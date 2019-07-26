import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import NewsResults from "./components/NewsResults/NewsResults";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Search from "./components/Search/Search";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import AppLoading from "./components/AppLoading/AppLoading";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="splash" hideNavBar>
          <Scene key="splash" component={SplashScreen} />
        </Scene>
        <Scene key="load" hideNavBar initial>
          <Scene key="load" component={AppLoading} />
        </Scene>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} />
        </Scene>
        <Scene key="countrypick" hideNavBar>
          <Scene key="countrypick" component={CountryPicker} />
        </Scene>
        <Scene key="home" hideNavBar>
          <Scene key="home" component={Home} />
        </Scene>
        <Scene key="newsresults" hideNavBar>
          <Scene key="newsresults" component={NewsResults} />
        </Scene>
        <Scene key="newsdetail" hideNavBar>
          <Scene key="newsdetail" component={NewsDetail} />
        </Scene>
        <Scene key="search" hideNavBar>
          <Scene key="search" component={Search} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
