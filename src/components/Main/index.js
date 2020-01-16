import React from 'react'
import { Container } from 'reactstrap'

import Home from '../Home'
import Clientes from '../Clientes'

function Main(props) {
  return (    
    <main>
      <Container>
        {props}
      </Container>
    </main>
  )
}

export default Main
