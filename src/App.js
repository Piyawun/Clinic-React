import React, { useState } from 'react';


import { Router, Switch, Route, Redirect } from 'react-router-dom'

import 'antd/dist/antd.css';
import './App.css';



import GlobalContext from './context/GlobalContext'

import { Button } from 'antd'

import RoutesApp from './RoutesApp'


function App() {
  const [data, setData] = useState({
    user: undefined,
  });
  return (
    <GlobalContext.Provider value={{ ...data, handleChange: setData }} >
      <RoutesApp></RoutesApp>
    </GlobalContext.Provider>
  );
}

export default App;
