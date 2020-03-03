import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cliente from './Cliente'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Clientes = () => {
  const [loading, setLoading] = useState(false)
  const [clientes, setClientes] = useState([])

  const generatedDataTable = (dados) => {    
    let dadosClientes = []
    dados.forEach((dado, index) => {
      dadosClientes.push(dado)
    })
    setClientes(dadosClientes)
  }

  useEffect(() => {
    setLoading(true)
    axios.get('/clientes').then(
      response => {
        generatedDataTable(response.data)
        setLoading(false)        
      })
  }, [])

  const listaClientes = clientes.map(
    pessoa => <Cliente key={pessoa.id} cliente={pessoa} />
  )
      
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <a href="/clientes/new" className="btn btn-primary">Cadastrar cliente</a>
            <table striped bordered className="table-cliente">
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
                {loading ? <tr><td colSpan="5" className="carregando">Carregando...</td></tr> : listaClientes}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
  
}

export default Clientes
