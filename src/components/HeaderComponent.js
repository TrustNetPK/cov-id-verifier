import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom'
import Auth from '../helpers/Auth'

import useWindowDimensions from '../helpers/useWindowDimensions';
import AgaKhanLogo from '../assets/images/logo.png';
import AgaKhanMiniLogo from '../assets/images/aga-khan-mini-transparent.png';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const { width } = useWindowDimensions();

  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   setIsOpen(false)
  // }, [window.location.pathname]);

  const handleLogin = () => {
    history.push('/login')
  }

  const handleLogout = () => {
    Auth.signout();
    history.replace('/')

  }

  return (
    <div>
      <Navbar color="light"
        light
        expand="sm"
        fixed="top"
        style={{ boxShadow: '0 0px 50px rgba(0, 0, 0, 0.2)' }}>
        <NavbarBrand href="/">
          {width > 500 ? (
            <img src={AgaKhanLogo} alt="aga-khan-logo" style={{ width: '170px', height: '50px' }} />
          ) : (
              <img src={AgaKhanMiniLogo} alt="aga-khan-logo" style={{ width: '50px' }} />
            )}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/TrustNetPK">
                <Button color="dark" className="px-4">GitHub</Button></NavLink>
            </NavItem>
            {Auth.getAuth() ? <NavItem>
              <NavLink style={{ cursor: 'pointer' }}>
                <Button color="primary" className="px-4" onClick={handleLogout}>
                  Log Out
                </Button>
              </NavLink>
            </NavItem> : <NavItem>
                <NavLink style={{ cursor: 'pointer' }}>
                  <Button color="primary" className="px-4" onClick={handleLogin}>
                    Log In
                  </Button>
                </NavLink>
              </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;