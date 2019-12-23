import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "./stores";
import ReactGA from "react-ga";
import HomePage from "modules/HomePage/components/HomePageContainer";
import LoginPage from "modules/LoginPage/components/LoginPageContainer";
import RegisterPage from "modules/RegisterPage/components/RegisterPageContainer";
import HistoryPage from "modules/HistoryPage/components/HistoryPageContainer";
import BoardPage from "modules/BoardPage/components/BoardPageContainer";
import KeyActivePage from "modules/KeyActivePage/components/KeyActivePageContainer";
import WrappedMenuContainer from "modules/WrappedMenu/components/WrappedMenuContainer";
import Page404 from "modules/common/Page404";
import "react-table/react-table.css";

const { store, history } = configureStore();

ReactGA.initialize("UA-139852456-1");

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/404" exact component={Page404} />
            <Switch>
              <WrappedMenuContainer>
                <Route path="/board" exact component={BoardPage} /> 
                <Route path="/history" exact component={HistoryPage} />
                <Route path="/keyactive" exact component={KeyActivePage} />
                <Route path="/" exact component={HomePage} />
                <Route
                  path="*"
                  render={(props) => {
                    if (!['/login', '/history', '/','/board', '/keyactive', '/register'].includes(props.location.pathname)) {
                      return <Redirect to="/404" from="*" />;
                    }
                  }}
                />
              </WrappedMenuContainer>
            </Switch>
            <Route path="*" component={Page404} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
