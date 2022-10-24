import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
reportWebVitals();
