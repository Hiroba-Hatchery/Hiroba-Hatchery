import React from 'react';
import '../../App.css';
import Form from '../Form.js';
import Post from '../Post';
import Cards from '../Cards';

//we'll add looping logical here to get all the posts in our db
// Logic to fetch all posts from DB and create individual post goes here
//use the query method
// fetch('URL')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// I think we get back objects from SQL, so use for/in to loop through
function Feed() {
  return (
    <>
      <Form />
      <Cards />
    </>
  );
}

export default Feed;
