import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          {/* <i icon={"faUtensils"}></i> */}
          <FontAwesomeIcon icon={faUtensils} size="2x" />
        </div>
        <div className="sidebar-brand-text mx-3">Graciela Leonardi</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-home"></i>
          <span>Página inicial</span></a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        Interface
      </div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Configurações</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Componentes disponíveis:</h6>
            <a className="collapse-item" href="#">Buttons</a>
            <a className="collapse-item" href="#">Cards</a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Ajustes</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">            
            <a className="collapse-item" href="#">Cores</a>
            <a className="collapse-item" href="#">Bordas</a>
            <a className="collapse-item" href="#">Animações</a>
            <a className="collapse-item" href="#">Outros</a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="blank.html">
          <i className="fas fa-fw fa-file-alt"></i>
          <span>Pedidos</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Cardápio</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="clientes.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Clientes</span></a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
  )
}

export default Sidebar
