import React from 'react';
import { HomeStyled, LinkStyled, LogLinks } from './HomeStyled';

export const Home = () => {  
  return (    
    <HomeStyled>
      <h2>Wellcome!</h2>     
        <p>Choose, please</p>
        <LogLinks>
          <LinkStyled to="/register">Register</LinkStyled>
          <p>or</p>
          <LinkStyled to="/login">Login</LinkStyled>
        </LogLinks>     
    </HomeStyled>
  );
};

export default Home;
