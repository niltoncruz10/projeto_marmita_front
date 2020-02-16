import React, { useState } from 'react'

import Routes from './routes'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Content from './components/Content'

import {BrowserRouter as Router} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Sidebar from './components/Sidebar'

const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)  

  return (
    <div className="App">
      {/* <Header />       */}
      <Router>
        <div className="App wrapper">
          <Sidebar toggle={toggle} isOpen={true} />
          {/* <Routes />   */}
          <Content />
        </div>
      </Router>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
