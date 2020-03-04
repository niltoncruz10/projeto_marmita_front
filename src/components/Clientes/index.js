import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cliente from './Cliente'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import FormCliente from './FormCliente'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Clientes = () => {
  const [loading, setLoading] = useState(false)
  const [clientes, setClientes] = useState([])
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

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
            <h1 className="h3 mb-2 text-gray-800">Clientes</h1>
            <div className="card shadow mb-4">
              <div className="card-header py-3">  
                <div className="row justify-content-end">
                  <a href="#" className="btn btn-primary" onClick={handleShow}>Cadastrar cliente</a>                
                </div>            
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table-cliente table table-bordered dataTable">
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

            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Modal */}
      <FormCliente show={show} close={handleClose} />

    </>
  )
  
}

export default Clientes
