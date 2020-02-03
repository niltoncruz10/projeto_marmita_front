import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap'
import './style.css'


const Header = () => {
  return(    
    <div className="main-header">
      <Navbar color="warning" light expand="md">
      {/* <Navbar color="grey darken-2"> */}
        <NavbarBrand href="/">Graciela</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/clientes">Clientes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cardapios">Cardápios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contas-receber">Contas a Receber</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pedidos">Pedidos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/produtos">Produtos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/entregas">Entregas</NavLink>
          </NavItem>
          <NavItem className="">
            <NavLink href="/login" className="">Sair</NavLink>          
          </NavItem>
        </Nav>
      </Navbar>    
    </div>
  )
}

export default Header;
