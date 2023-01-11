import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      {/* <h1>Hiroba Hatchery FROM APP!</h1> */}
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
