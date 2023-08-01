import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserName } from 'redux/selectors';

const withAuthRedirect = SomeComponent => {
  const PrivateComponent = props => {
    const userData = useSelector(selectUserName);
    return userData ? (
      <SomeComponent {...props} />
    ) : (
      <Navigate to={'/'} replace={true} />
    );
  };
  return PrivateComponent;
};
export default withAuthRedirect;
