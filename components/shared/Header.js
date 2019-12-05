import React, { useState } from 'react';
import { Link } from '../../routes';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import styled from 'styled-components';

import { useSpring, animated, config } from 'react-spring';

import { withRouter } from 'next/router';
import { Brand } from '../styles/Header.styles';
import NavbarLinks from './NavBarLinks';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, className, router } = props;
  const handleNavbar = () => setIsOpen(!isOpen);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <div>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand href="/">Matt Clagett</Brand>
          <NavLinks style={linkAnimation}>
            <NavbarLinks
              currentRoute={router.asPath}
              isAuthenticated={isAuthenticated}
            />
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={isOpen} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu navbarState={isOpen} handleNavbar={handleNavbar} />
    </div>
  );
};

export default withRouter(Header);

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 16;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
