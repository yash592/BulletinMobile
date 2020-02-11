import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";
import TestPage from "./components/TestPage/TestPage";

import NewsResults from "./components/NewsResults/NewsResults";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Search from "./components/Search/Search";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import LoadApp from "./components/LoadApp/LoadApp";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import SavedNewsDeck from "./components/SavedNewsDeck/SavedNewsDeck";
//import { SavedNewsDeck } from "./components/Common/SwipeDeckCard";
import { SwipeDeckCard } from "./components/common/SwipeDeckCard/SwipeDeckCard";

const Routes = props => {
  // console.log("rputes props", props);
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" hideNavBar initial>
          <Scene key="home" component={Home} />
        </Scene>
        <Scene key="saved" hideNavBar>
          <Scene key="saved" component={SavedNewsDeck} />
        </Scene>

        <Scene key="splash" hideNavBar>
          <Scene key="splash" component={SplashScreen} />
          <Scene key="countrypick" hideNavBar>
            <Scene key="countrypick" component={CountryPicker} />
          </Scene>
        </Scene>

        <Scene key="load" hideNavBar>
          <Scene key="load" component={LoadApp} />
        </Scene>

        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} />
        </Scene>

        <Scene key="test" hideNavBar>
          <Scene key="test" component={TestPage} />
        </Scene>

        <Scene key="newsresults" hideNavBar>
          <Scene key="newsresults" component={NewsResults} />
        </Scene>
        <Scene key="swipedeckcard" hideNavBar>
          <Scene key="swipedeckcard" component={SwipeDeckCard} />
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
