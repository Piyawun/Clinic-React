import React, {useState} from 'react';


import {Router, Switch, Route } from 'react-router-dom'

import 'antd/dist/antd.css';
import './App.css';

import Sidebar from './pages/SidebarComponent';

import Login from './Authentication/login'

function App() {

  return (
    <div>
      <div>

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Sidebar}></Route>
        </Switch>
      </div>
    </div>
  );
  
}

export default App;
