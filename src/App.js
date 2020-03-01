import React, { useState } from 'react'

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import {BrowserRouter as Router} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const App = () => {

  return (
    <div className="App">
      <Router>
          {/* <Sidebar /> */}
        <Header />

      </Router>      
    </div>
  );
}

export default App;
