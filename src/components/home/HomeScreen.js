import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to='/login'>
        <h1>Login</h1>
      </Link>

      <Link to='/register'>
        <h1>Register</h1>
      </Link>
    </>
  );
};

export default HomeScreen;
