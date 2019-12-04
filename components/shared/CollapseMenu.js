import React from 'react';
import styled from 'styled-components';
import NavBarLinks from './NavBarLinks';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <NavBarLinks />
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 15;
`;

const NavLinks = styled.ul`
  padding: 2rem 1rem 2rem 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
