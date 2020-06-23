import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { useHistory } from 'react-router-dom'

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();


  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false)
  }, [window.location.pathname]);



  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">vaccify</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/TrustNetPK">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://trust.net.pk/covid19">Web</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Book Ticket</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;