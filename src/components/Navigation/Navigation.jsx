import React from 'react'
import { NavStyled, StyledLink } from './NavigationStyled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';

export const Nav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavStyled>
        {isLoggedIn ? (
          <>
            <Toaster position="top-right"/>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </NavStyled>
  )
}