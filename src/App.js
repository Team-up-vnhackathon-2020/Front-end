import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Request from './pages/Request'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path = "/" component = {Home}></Route>
        <Route exact path = "/login" component = {Login}></Route>
        <Route exact path = "/signup" component = {Signup}></Route>
        <Route exact path = "/request" component = {Request}></Route>
        <Route exact path = "/profile" component = {Profile}></Route>
        {/* <Route exact path = "/verify/:id" component = {Verify}></Route>
        <Route exact path = "/profile" component = {Profile}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
