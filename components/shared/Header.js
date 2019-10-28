import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Link from 'next/link';

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="transparent"
        dark
        expand="md"
        className="port-navbar port-default absolute"
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
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
