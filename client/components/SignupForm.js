import React from 'react';
import './SignupForm.css';

function SignupForm() {
  // sign up fetch
  const handleSignup = () => {
    console.log('handle signup function clicked');
  };

  // login fetch
  const handleLogin = () => {
    console.log('handle login function clicked');
  };

  return (
    <div className='sign-up-form'>
      <form className='user-input'>
        <label htmlFor='username'>Username:</label>
        <input className='username-input'></input>
        <label htmlFor='password'>Password:</label>
        <input className='password-input'></input>
      </form>
      <div className='signup-btns'>
        <button className='signup-btn' onClick={handleSignup}>
          Sign Up
        </button>
        <button className='login-btn' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
