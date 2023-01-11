import React, { useState } from 'react';
import './Form.css';
import Post from './Post';
import { Link } from 'react-router-dom';

function Form() {
  const [uid, setName] = useState('');
  const [content, setMessage] = useState('');
  const [url, setURL] = useState('');

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleMsg = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };
  // Handle submit function to make a POST request to DB to add new post to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit function clicked!');

    let post_id = '12';

    const post = { post_id, uid, content, url };
    console.log(post);

    try {
      const response = await fetch('http://localhost:8080/api/post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('json', json);

      if (!response.ok) {
        console.log(json.error);
        // setError(json.error);
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
    <section className='form-section'>
      <div className='post-form'>
        <form className='feed-input'>
          <label htmlFor='userName'>Name:</label>
          <input className='content' onChange={handleName}></input>
          <label htmlFor='content'>Message:</label>
          <input className='content' onChange={handleMsg}></input>
          <label htmlFor='URL'>Project URL:</label>
          <input className='content' onChange={handleURL}></input>
        </form>
        <div className='submit-btns'>
          <button className='submit-btn' onClick={handleSubmit}>
            Submit Post
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
