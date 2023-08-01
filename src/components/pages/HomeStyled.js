import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeStyled = styled.div`
outline: 1px solid red;
width: 300px;
margin: 100px auto;
display: flex;
flex-direction: column;
align-items: center;


`
export const LogLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    /* Link{
        text-decoration: none;
  font-size: 20px;
  color: navy;
    } */

`

export const LinkStyled = styled(Link)`
text-decoration: none;
  font-size: 20px;
  color: navy;
`