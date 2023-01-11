const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// OAuth: code being passed from the frontend
app.get('/getAccessToken', async function (req, res) {
  console.log('req.query.code from server,js: ', req.query.code);
  const params = '?client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET + '&code=' + req.query.code;

  await fetch('https://github.com/login/oauth/access_token' + params, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data from server.js: ', data);
      res.json(data);
    });
});

// getUserData - access token is going to be passed in as an Authorization header
app.get('/getUserData', async function (req, res) {
  req.get('Authorization'); // Bearer ACCESSTOKEN

  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      'Authorization': req.get('Authorization'), // Bearer ACCESSTOKEN
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('User data from server.js: ', data);
      res.json(data);
    });
});

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('This page does not exist.'));

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

module.exports = app;
