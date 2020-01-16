import React, { Component } from 'react'
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Clientes from './components/Clientes'
import Home from './components/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/clientes" component={Clientes} />
    </Switch>
  </BrowserRouter>
)

export default Routes
