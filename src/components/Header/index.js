import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './style.css'


const Header = () => {
  return(
    <Navbar color="warning" light expand="md">
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
  )
}

export default Header;
