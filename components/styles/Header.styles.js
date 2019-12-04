import styled from 'styled-components';

export const Brand = styled.div`
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin: auto 0;
`;

export const NavbarLink = styled.a`
  margin: 0 1.5rem;
  color: white !important;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 300ms linear 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #dba919 !important;
  }
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  z-index: 15;
  padding: 40px;
  position: absolute;
  color: transparent;
  background: linear-gradient(0deg, #5160d1 0%, #375c93 100%) !important;
  position: relative;
`;
