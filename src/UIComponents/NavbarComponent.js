import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
      <Navbar style={{backgroundColor: 'black'}}>
        <NavbarBrand href="/" style={{color: 'white'}}>musician creator</NavbarBrand>
          <NavbarToggler onCLick={toggle}/>        
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#" style={{color: 'white'}}>create new</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{color: 'white'}}>musician list</NavLink>
          </NavItem>
          </Nav>        
      </Navbar>
    </div>
    );
};

export default Navigation;

