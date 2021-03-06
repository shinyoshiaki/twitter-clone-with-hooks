import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./containers/pages/App";
import * as serviceWorker from "./serviceWorker";
import createStore from "./modules/createStore";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Signup from "./containers/pages/Signup";
import Login from "./containers/pages/Login";
import Home from "./containers/pages/Home";
import Explore from "./containers/pages/Explore";
import Notifications from "./containers/pages/Notifications";
import Messages from "./containers/pages/Messages";
import Settings from "./containers/pages/Settings";

const data = createStore();

ReactDOM.render(
  <Provider store={data.store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
        <Route path="/settings" component={Settings} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
