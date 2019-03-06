import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import reducer from "./reducers/reducers.jsx";
import routers from "./components/routers.jsx";
import "antd/dist/antd.css";

let store = createStore(reducer, applyMiddleware(createLogger(), thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {
          routers.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} render={(props) => (<route.component {...props} routes={route.routes} />)} />)
          )
        }
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);