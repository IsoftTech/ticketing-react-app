import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";

import Routes from "./Routes";
import store from "./store/index";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "http://localhost:8000";
console.log(axios.defaults.baseURL);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
