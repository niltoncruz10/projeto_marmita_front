import React, { Component } from 'react'
import axios from 'axios'

class Cliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.handleClickExcluir = this.handleClickExcluir.bind(this)
  }

  handleClickExcluir(event) {
    let {name} = event.target
    console.log('clicou');
    axios.delete(`/clientes/${name}`).then(
      response => {
        console.log('Cliente ', name, ' excluído com sucesso!')
        window.location.reload()
        // this.setState({loading: false})
      }
    )

  }
      
 

  render() {
    const link = '/cliente/' + this.props.cliente.id
    return (
      <tr>
        <td><a href={link}>{this.props.cliente.id}</a></td>
        <td><a href={link}>{this.props.cliente.nome}</a></td>
        <td>Dia {this.props.cliente.data_pagamento}  </td>
        <td>R$ {this.props.cliente.saldo}</td>
        <td>Editar | <a href="#" name={this.props.cliente.id} onClick={this.handleClickExcluir}>Excluir</a></td>
      </tr>
    )

  }
}

export default Cliente
