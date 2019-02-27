import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import reducer from "./reducers/reducers.jsx";


// 路由
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import "antd/dist/antd.css";

let store = createStore(reducer, applyMiddleware(createLogger(), thunk));

let routers = [
  { path: "/", component: Login, exact: true },
  { path: "/home", component: Home }
]

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {routers.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} render={(props) => (<route.component {...props} routes={route.routes} />)} />)
        )}
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);


{/* <div>
{this.props.routes.map((route, index) => <Route key={index} {...route} />)}
</div> */}