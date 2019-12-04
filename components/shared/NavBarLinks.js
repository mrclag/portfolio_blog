import React from 'react';
import auth0 from '../../services/auth0';
import { Link } from '../../routes';
import { NavbarLink } from '../styles/Header.styles';

const NavBarLinks = ({ isAuthenticated, collapse, currentRoute }) => {
  const BsNavLink = props => {
    const { route, title } = props;
    const activeLink = currentRoute == route;

    return (
      <Link route={route}>
        <NavbarLink activeLink={activeLink} collapse={collapse}>
          {title}
        </NavbarLink>
      </Link>
    );
  };

  const Logout = () => {
    return <NavbarLink onClick={auth0.logout}>Logout</NavbarLink>;
  };

  return (
    <div>
      <BsNavLink route="/" title="Home" />
      <BsNavLink route="/portfolios" title="Projects" />
      {isAuthenticated ? (
        <BsNavLink route="/userBlogs" title="Edit Blogs" />
      ) : (
        <BsNavLink route="/blogs" title="Blog" />
      )}

      {isAuthenticated ? <Logout /> : ''}
    </div>
  );
};

export default NavBarLinks;
