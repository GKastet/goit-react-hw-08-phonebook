import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label{
    display: flex;
    flex-direction: column;
  }

  input{
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
  }

  button{
    width: 100px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: lightyellow;
    transition: background-color 250ms linear;
    &:hover{
        background-color: yellow;
    }
  }
`;
