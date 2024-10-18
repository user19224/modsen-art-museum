import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #343333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  color: #f5b921;
  text-decoration: none;

  &:hover {
    color: #f5b921; 
  }
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
      color: #0073e6;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Logo to="/">Modsen Art Museum</Logo>
      <NavLinks>
        <Link to="/favourites">Избранное</Link>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
