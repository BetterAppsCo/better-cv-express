import React from 'react';
import '../styles/main.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  return (<Router>
    <div className="App" id="app-container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Dashboard} />
      </Switch>
    </div>
  </Router>
  );
};

export default App;