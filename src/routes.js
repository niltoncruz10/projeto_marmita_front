import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './components/Home'
import Clientes from './components/Clientes'
import FormCliente from './components/Clientes/FormCliente'
import ShowCliente from './components/Clientes/ShowCliente'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/clientes" component={Clientes} />
      <Route path="/clientes/new" component={FormCliente} />
      <Route path="/cliente/:login" component={ShowCliente} />
    </Switch>
  </BrowserRouter>
)

export default Routes
