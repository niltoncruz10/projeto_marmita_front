import React from 'react'

import Cliente from './Cliente'
import { Table, Container, Button } from 'reactstrap'

import './style.css'

function Clientes() {
  return (
    <Container>
      <Button color="primary">Cadastrar cliente</Button>{' '}
      <Table striped bordered className="table-cliente">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <Cliente cliente={{id: 1, nome: 'Fulano', email: 'fulano@email.com'}} />
          <Cliente cliente={{id: 2, nome: 'Ana Carla', email: 'aninha@email.com'}} />
          <Cliente cliente={{id: 3, nome: 'Bruna Ciqueira', email: 'bruna@email.com'}} />
          <Cliente cliente={{id: 4, nome: 'Daiani Mota', email: 'Dai@email.com'}} />        
        </tbody>
      </Table>
    </Container>
  )
}

export default Clientes
