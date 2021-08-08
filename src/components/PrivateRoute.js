import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { me } from '../redux/reducers/authSlice';

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.status === 'idle') {
      dispatch(me());
    }
  }, [auth.status, dispatch]);

  return auth.status !== 'succeeded' && !auth.user ? (
    'Loading'
  ) : (
    <Route
      {...rest}
      render={() => (auth.user ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
