import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import './index.sass';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss'

// Views
import BudgetBanlistView from "./views/BudgetBanlistView/BudgetBanlistView.js"
import PauperBanlistView from "./views/PauperBanlistView/PauperBanlistView.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/budget-banlist" component={BudgetBanlistView} />
      <Route path="/pauper-banlist" component={PauperBanlistView} />
      <Route path="/" component={BudgetBanlistView} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
