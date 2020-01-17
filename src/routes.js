import React, { Component } from 'react'
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Clientes from './components/Clientes'
import FormCliente from './components/Clientes/FormCliente'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/clientes/new" component={FormCliente} />
    </Switch>
  </BrowserRouter>
)

export default Routes
