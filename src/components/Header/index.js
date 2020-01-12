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
            <NavLink href="/pedidos">Pedidos</NavLink>          
          </NavItem>
        </Nav>
      </Navbar>    
    </div>
  )
}

export default Header;
