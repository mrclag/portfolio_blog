import React from 'react';
import auth0 from '../services/auth0';

const Login = () => {
  return <span onClick={auth0.login}>Login</span>;
};

export default Login;
