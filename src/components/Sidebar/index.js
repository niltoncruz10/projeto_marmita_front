import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import Submenu from './Submenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
// import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Graciela Leonardi</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          {/* <Submenu title="Home" items={submenus[0]}/> */}
          <NavItem>
            <NavLink href="/">
              {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>About */}Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clientes">
              {/* <FontAwesomeIcon icon={faImage} className="mr-2"/>Portfolio */}Clientes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/produtos">
              {/* <FontAwesomeIcon icon={faQuestion} className="mr-2"/>FAQ */}Produtos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" to={'/contact'}>
              {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Contact */}Contact
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Home 1",
        target: "Home-1"
      },
      {
        title: "Home 2",
        target: "Home-2",        
      },
      {
        itle: "Home 3",
        target: "Home-3",      
      }
    ],
    [
      {
        title: "Page 1",
        target: "Page-1",          
      },
      {
        title: "Page 2",
        target: "Page-2",        
      }
    ]
  ]
  

export default SideBar;