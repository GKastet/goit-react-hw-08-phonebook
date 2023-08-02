import styled from 'styled-components';

export const FormWrap = styled.div`
  max-width: 500px;
  margin: 70px auto;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;  
  gap: 20px;
  span {
    font-size: 18px;
    font-weight: bold;
  }
  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
  }
  button {
    cursor: pointer;    
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    background-color: #b9f8fe;
    transition: background 250ms linear;
    &:hover {
      background-color: #c3f890;
    }
  }
`;
