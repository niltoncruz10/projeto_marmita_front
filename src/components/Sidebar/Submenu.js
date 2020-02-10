import React, {useState} from 'react'
import { NavItem, NavLink, Collapse } from 'reactstrap'
import { Link } from 'react-router-dom'

function Submenu(props) {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <div>
      {/* <NavItem className={'menu-open'}>
        <NavLink className="dropdwn-toggle">
          props.title
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={'items-menu mb-1'}>
          <NavItem key="1" className="pl-4">
            <NavLink tag='{Link}' to="/">
              Exemplo link
            </NavLink>
          </NavItem>
      </Collapse> */}

      <NavItem>
        <NavLink className="dropdown-toggle">Link</NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={'items-menu mb-1'}>
        <NavItem>
          <NavLink>
            Link nav
          </NavLink>
        </NavItem>        
      </Collapse>
    </div>
  )
}

export default Submenu
