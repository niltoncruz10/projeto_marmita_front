import React from 'react'
import { Container } from 'reactstrap'

import Home from '../Home'
import Clientes from '../Clientes'

function Main() {
  return (    
    <main>
      <Container>
        <Clientes />
      </Container>
    </main>
  )
}

export default Main
