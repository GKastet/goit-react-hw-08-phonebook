import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: navy;
  display: block;
  padding: 10px;
  margin-left: 20px;

  &.active {
    color: orangered;
  }
`;
export const NavStyled = styled.nav`
  display: flex;
  align-items: center; 
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
`;

