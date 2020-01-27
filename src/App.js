import React from 'react'

import Routes from './routes'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />      
      <Routes />  
      <Footer />
    </div>
  );
}

export default App;
