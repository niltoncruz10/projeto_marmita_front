import React, {Component} from 'react'
import axios from 'axios'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import './style.css'

class FormCliente extends Component {

  constructor() {
    super()
    this.state = {
      nome: '',
      data_pagamento: '1',
      saldo: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    // console.log('submited');
    // console.log(this.state.nome);
    // console.log(this.state.data_pagamento)

    const {nome, data_pagamento, saldo} = this.state

    
    const novoCliente = {
      nome,
      data_pagamento,
      saldo
    }
    
    axios.post(`/clientes/`, novoCliente ).then(
      response => {
        console.log('Cliente adicionado com sucesso! -> ', novoCliente.nome);        
        this.setState({nome: '', data_pagamento: '', saldo: ''})       
        
      }
    )
    
    // event.preventDefault()

  }

  render() {
    return (    
      <Container>
        <h1>Cadastrar novo cliente</h1>    
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="nome">Nome: </Label>
            <Input type="text" name="nome" id="nome" placeholder="Nome do cliente" onChange={this.handleChange} />
          </FormGroup>   

          <FormGroup>
            <Label for="data_pagamento">Data de Pagamento</Label>
            <select name="data_pagamento" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>

            </select>
          </FormGroup>

          <FormGroup>
            <Label for="saldo">Saldo (R$)</Label>
            <Input type="text" name="saldo" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="botoes">
            <a href="/clientes" className="btn btn-secondary">Voltar</a>
            <Button color="primary">Salvar</Button>
          </FormGroup>
        </Form>
      </Container>
    )

  }

}

export default FormCliente
