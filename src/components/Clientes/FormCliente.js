import React, { useState } from 'react'
import axios from 'axios'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import Cliente from './index'

import './style.css'

const  FormCliente = ({show, close}) => {

  const [submit, setSubmit] = useState(!close)

  // const [show, setShow] = useState(false)

  // const handleClose = () => 

  // constructor() {
  //   super()
  //   this.state = {
  //     nome: '',
  //     data_pagamento: '1',
  //     descricao: '',
  //     saldo: '0',
  //   }

  //   this.handleSubmit = this.handleSubmit.bind(this)
  //   this.handleChange = this.handleChange.bind(this)
  // }

  function handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  function handleSubmit(event) {

    console.log('submited')

    setSubmit(close)

    // const {nome, data_pagamento, descricao, saldo} = this.state
    
    // const novoCliente = {
    //   nome,
    //   data_pagamento,
    //   descricao,
    //   saldo
    // }
    
  
    // axios.post(`/clientes/`, novoCliente ).then(
    //   response => {
    //     console.log('Cliente adicionado com sucesso! -> ', novoCliente.nome);        
    //     this.setState({nome: '', data_pagamento: '', descricao: '', saldo: ''})       
        
    //   }
    // )

  }

  return (    
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor="nome">Nome: </label>
            <div className="col-sm-9">
              <input className="form-control" type="text" name="nome" id="nome" placeholder="Nome do cliente" onChange={handleChange} />

            </div>
          </div>   

          <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor="descricao">Descrição: </label>
            <div className="col-sm-9">
              <input className="form-control" type="text" name="descricao" id="descricao" placeholder="Descrição" onChange={handleChange} />
              
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor="data_pagamento">Data de Pagamento</label>
            <div className="col-sm-9">              
              <select className="form-control" name="data_pagamento" onChange={handleChange}>
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
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor="saldo">Saldo (R$)</label>
            <div className="col-sm-9">
              <input className="form-control" type="text" name="saldo" onChange={handleChange} value={''} />              
            </div>
          </div>            
        </form> 
      </Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button variant="secondary" onClick={close}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" className="ml-2" onClick={handleSubmit}>
            Salvar
          </Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>
  )
}

export default FormCliente
