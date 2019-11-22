import React, { useState } from 'react';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import auth0 from '../../services/auth0';

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </ActiveLink>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      Logout
    </span>
  );
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, className } = props;
  const toggle = () => setIsOpen(!isOpen);

  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

  return (
    <div>
      <Navbar
        color="transparent"
        dark
        expand="md"
        className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Matt Clagett
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Projects" />
            </NavItem>
            <NavItem className="port-navbar-item">
              {isAuthenticated ? (
                <BsNavLink route="/userBlogs" title="Edit Blogs" />
              ) : (
                <BsNavLink route="/blogs" title="Blog" />
              )}
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV" />
            </NavItem> */}
            <NavItem className="port-navbar-item">
              {isAuthenticated ? <Logout /> : ''}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
