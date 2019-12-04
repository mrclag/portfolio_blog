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
  margin: 1.5rem 1.5rem;
  color: ${props => (props.activeLink ? '#dba919' : 'white')} !important;
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
  display: ${props => (props.collapse ? 'flex' : 'unset')};
`;
