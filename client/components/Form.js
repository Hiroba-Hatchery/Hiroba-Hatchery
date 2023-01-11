import React, { useState } from 'react';
import './Form.css';
import Post from './Post';
import { Link } from 'react-router-dom';

function Form() {
  const [message, setMessage] = useState('');
  const [url, setURL] = useState('');

  // Handle submit function to make a POST request to DB to add new post to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit function clicked!');

    const post = { name, message, url };

    try {
      const response = await fetch('http://localhost:8080/api/post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        // setErrorField(json.errorField);
        // console.log('error field: ', json.errorField);
      }

      if (response.ok) {
        setMessage(message);
        setURL(url);
        // setErrorField([]);
        console.log('new post added!', json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='post-form'>
      <form className='user-input'>
        <label htmlFor='userName'>Name:</label>
        <input className='content'></input>
        <label htmlFor='content'>Message:</label>
        <input className='content'></input>
        <label htmlFor='URL'>Project URL:</label>
        <input className='URL'></input>
      </form>
      <div className='submit-btns'>
        <button className='submit-btn' onClick={handleSubmit}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default Form;
