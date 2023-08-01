import React from 'react';
import { FormStyled, FormWrap } from './RegisterStyled';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/Thunks/authThunk';

export const Login = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const email = children.email.value;
    const password = children.password.value;
    const logInUserData = { email: email, password: password };

    dispatch(logInThunk(logInUserData));
    evt.currentTarget.reset();
  };

  return (
    <FormWrap>
      <h3>Complete form, please</h3>
      <FormStyled onSubmit={handleOnSubmit}>
        <span>Email</span>
        <input type="email" name="email" required />
        <span>Password</span>
        <input type="password" name="password" required />
        <button type="submit">Log In</button>
      </FormStyled>
    </FormWrap>
  );
};

export default Login;
