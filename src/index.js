import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//
import Home from './Home';
import IssueCredential from './IssueCredential';
import VerifyCredential from './VerifyCredential';

function App() {

  var hist = createBrowserHistory();

  return (
    <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/issuer" component={IssueCredential} />
          <Route exact path="/verifier" component={VerifyCredential} />
        </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
