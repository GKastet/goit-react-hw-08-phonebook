import React from 'react';
import { UserMenuStyled } from './UserMenuStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/Thunks/authThunk';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logOutThunk());
  };

  return (
    <UserMenuStyled>
      <p>Hello, {userName}</p>
      <button type="submit" onClick={handleOnClick}>
        Logout
      </button>
    </UserMenuStyled>
  );
};
