import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Submenu from './Submenu'

import 'bootstrap/dist/css/bootstrap.min.css'

function Sidebar(props) {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
    
    </div>
  )
}

export default Sidebar

