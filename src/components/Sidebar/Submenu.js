import React, { useState } from 'react';
import  { Collapse, NavItem, NavLink } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

const Submenu = props => {
  
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  const { icon, title, items } = props;

  // console.log('items', items);
  
 
  return (
    <div>
      <NavItem onClick={toggleNavbar} className={classNames({'menu-open': !collapsed})}>
        <NavLink className="dropdown-toggle">
          {/* <FontAwesomeIcon icon={icon} className="mr-2"/>{title} */}{title}
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={classNames('items-menu',{'mb-1': !collapsed})}>
        {items.map((item, index) => (
            <NavItem key={index} className="pl-4">
              <NavLink href="#" to={item.target}>
                {item.title}
              </NavLink>
            </NavItem>
            ))}
      </Collapse>
    </div>
  );
}

export default Submenu;