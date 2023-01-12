import React from 'react';
import '../../App.css';
import SignupForm from '../SignupForm';

function Signup() {
  return (
    <>
      <img
        src='https://github.com/Hiroba-Hatchery/Hiroba-Hatchery/raw/dev/media/Main-logo.png'
        className='signup-image'
        alt='hiroba hatchery main logo: baby chick'
      />
      <SignupForm />
    </>
  );
}

export default Signup;
