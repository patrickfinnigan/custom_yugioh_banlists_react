import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import './index.sass';
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/main.scss";

// Views
import PublicBanlistView from "./views/PublicBanlistView.js";
import BudgetBanlistView from "./views/BudgetBanlistView.js";
import PauperBanlistView from "./views/PauperBanlistView.js";
import TestView from "./views/TestView.js";
import ContactTemp from "./views/ContactTemp.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/public-banlist" component={PublicBanlistView} />
      <Route path="/budget-banlist" component={BudgetBanlistView} />
      <Route path="/pauper-banlist" component={PauperBanlistView} />
      <Route path="/test-page" component={TestView} />
      <Route path="/contact" component={ContactTemp} />
      <Route path="/" component={PublicBanlistView} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// be rootin' be tootin' and by god be shootin', but most importantly, be kind
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡘⣿⣿⣧⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⢻
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄
// ⣿⣿⣿⣿⣿⣿⣿⣿⣏⠹⣿⣿⣿⣎⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡹⣿⣿⣧⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠻⣿⣿⣿⣧⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡆⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣄⠘⢿⣿⣿⣷⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣷⡘⣿⣿⡀⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢹⣷⡌⢻⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣷⡘⣿⣧⠸⣿⣦⠹⣿⡿⢛⣽⣿⣿⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⡼⣿⣿⣿⣿⡇⢸⣿⣿⣆⠹⣿⣿⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⣿⣿⣷⠘⣿⡄⣿⡿⠓⡀⢴⣿⣿⣿⣿⣿⣿⣿⣿⡘⣿⣿⣿⣿⣿⣿⡊
// ⣿⣿⣿⣿⡇⣿⣿⣿⣿⡇⢸⣿⣿⣿⣧⡘⢿⣿⣿⣷⡈⢿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣧⠹⠇⢉⣠⣾⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣧⢹⣿⣿⣿⣿⣿⣷
// ⣿⣿⣿⣿⣿⢸⣿⣿⣿⡇⠸⠿⠿⠿⠿⠷⠌⠻⠿⢿⣿⡀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸⣿⣿⣿⣯⡄⢲⢸⣿⣿⣿⣿⣧⠙⣿⣿⣿⣿⣿⣿⣿⡆⢿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⡆⣿⣿⣿⡇⢰⣶⣶⣶⣶⣶⣶⣦⠰⣤⣤⣤⢀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⣿⣿⣿⣿⠘⢸⣿⣿⣿⣿⣿⣷⡘⣿⣿⣿⣿⣿⣿⣿⠘⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣧⢹⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣷⡘⢿⣿⡄⢦⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣷⡘⣿⣿⣿⣿⣿⣿⡆⢿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⡄⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠻⣷⠸⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸⣿⣿⣿⣿⣿⣿⣷⣸⣿⣿⣿⡿⠿⠟⠿⠗⠘⠛⢻⣿⣿⣿⣇⢸⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣧⠸⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡙⢇⢻⣷⡈⢿⣿⣿⣿⣿⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠉⠄⢀⣀⣀⣠⣤⣤⠐⣾⣿⣿⣿⣿⠘⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⡆⠿⠇⠾⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣌⠘⣿⣷⡌⢻⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⠄⠄⠠⠴⣶⣿⣿⣿⣿⣿⣿⣿⣧⠹⣿⣿⣿⣿⠄⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣥⣤⡀⠄⣤⣤⣤⣤⣤⣤⣤⣤⣤⠤⠄⠄⠄⣹⣷⣝⣿⣿⣄⢻⣿⣿⡏⣰⣿⣿⣿⣿⣿⣿⣷⣦⣤⣄⣀⡀⠉⠙⠛⠿⢿⣿⣿⣿⣆⢹⣿⣿⣿⡀⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠠⣿⣿⣿⣿⣿⡿⠟⠋⠄⠄⣠⣴⣾⣿⣿⣿⣿⣿⣿⣦⢹⢏⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣄⣀⢉⣿⣿⡄⠿⣿⣿⡇⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⢻⣿⡿⠟⠉⠄⠄⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⣿⣿⡇⢸⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⠄⠋⠄⢀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢿⣿⠄⡈⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣏⣥⣖⡀⢶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⣸⣿⠄⡇⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⢰⡇⢸⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⡇⣸⡇⢸⣿⠇
// ⠹⣿⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⣾⣿⡇⣿⡇⢸⡟⢰
// ⢧⠹⣿⣷⣝⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢁⣩⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠐⣿⣿⣿⣿⡇⠸⢡⣿
// ⠘⣧⡙⣿⣿⣷⣝⠻⣿⣿⣿⣿⣿⣿⣿⣿⣆⠪⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⡈⠄⢿⣿⣿⣿⡇⢠⣾⣿
// ⣇⢹⣷⡘⢿⣿⣿⣷⡌⠻⣿⣿⣿⣿⣿⣿⣿⣧⡠⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣭⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⡇⢠⠸⣿⣿⣿⠅⣿⣿⣿
// ⣿⡄⢻⣿⣌⢻⣿⣿⣷⡀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣔⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⣴⣿⣿⣿⡗⠄⡀⢿⣿⣿⠄⣿⣿⣿
// ⣿⣷⠠⠹⣿⣧⡙⢿⣿⣷⡀⢤⠄⠙⢿⣿⣿⣿⣿⣿⣯⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⡀⢀⡇⢸⣿⣿⣿⡇⠄⣧⠸⣿⡟⢸⣿⣿⣿
// ⢿⣿⣇⢱⠈⢿⣿⣷⣭⣟⣷⡌⢣⠄⢀⡙⢿⣿⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡾⢁⣾⡇⢸⣿⣿⣿⠁⡇⢸⡄⢻⠇⣾⣿⣿⣿
// ⡈⢿⣿⡆⢳⡀⠙⢿⣿⣿⣿⣿⣄⠁⡀⢷⣄⠙⢿⣿⣿⣿⣿⣆⠉⠛⠛⠻⠿⠿⠿⠿⠿⠿⠿⣿⡿⠿⠿⠿⠟⠛⢁⣴⣿⡿⢁⣾⣿⡇⢸⣿⣿⠇⣼⣧⢸⣷⠈⢰⣿⣿⣿⣿
// ⣿⣌⠻⣿⡄⢻⡌⢦⣉⠻⢿⣿⣿⣷⣄⠘⣿⣷⣄⠹⣿⣿⣿⣿⣆⢠⣀⡀⠄⠄⠄⠄⠄⠄⠄⠠⠄⠄⣀⣠⣤⣴⣿⣿⡟⢡⣾⣿⣿⠃⣾⣿⠏⣰⣿⣿⠈⣿⠆⢸⣿⣿⣿⣿
// ⣿⣿⣦⡙⢿⣆⣻⣄⢻⣛⣒⣈⣉⣻⣿⣆⠨⠿⠟⠓⠈⠻⣿⣿⣿⡆⢫⣭⣤⣤⣶⣤⣄⣀⠄⠄⠄⣾⣿⣿⣿⣿⡿⢋⣴⣿⣿⣿⡿⢠⡿⢋⣼⣿⣿⣿⠄⡿⣼⠄⣿⣿⣿⡟
// ⣿⣿⣿⣿⣮⣿⣿⣿⡆⠄⠲⣶⣶⣶⣶⣦⣼⣿⣿⣿⣷⡀⠙⢿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣬⣉⡛⠛⠚⠻⣿⣿⣿⡿⢃⣞⣵⣿⣿⣿⣿⣿⠄⣷⣿⡆⢹⣿⣿⡇
