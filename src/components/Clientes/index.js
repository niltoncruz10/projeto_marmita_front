import React, { Component } from 'react'
import { Table, Container } from 'reactstrap'
import axios from 'axios'

import Cliente from './Cliente'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class Clientes extends Component {
  
  constructor() {
    super()
    this.state = {
      loading: false,
      clientes: []
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    axios.get('/clientes').then(
      response => {
        this.setState({clientes: response.data, loading: false})
      }
      
    )

  }

  render() {
    const clientes = this.state.clientes.map(
      pessoa => <Cliente key={pessoa.id} cliente={pessoa} />
    )
        
    return (
      <Container>
        <a href="/clientes/new" className="btn btn-primary">Cadastrar cliente</a>
        <Table striped bordered className="table-cliente">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Data de pagamento</th>
              <th>Saldo</th>
              <th>Ações</th>

            </tr>
          </thead>
          <tbody>
            {this.state.loading ? <tr><td colSpan="5" className="carregando">Carregando...</td></tr> : clientes}
          </tbody>
        </Table>
      </Container>
    )

  }
  
}

export default Clientes
