import React from 'react';
import ReactDom from 'react-dom';
import { useEffect, useState } from 'react';

const CLIENT_ID = '61d882059a1493003cbb';

function App() {
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({});
  // Forward the user to the github login screen (we pass in the clined ID)
  // User is now on the github side and logs in (github.com/login)
  // When user decides to login, they get forwarded back to localhost:3000/api/feed
  // URL will include a unique code at the end /?code=asdkawelkjsdfiuawkjh
  // Use the code to get the acess token (code can only be used once)

  useEffect(() => {
    //URL will include a unique code at the end /?code=asdkawelkjsdfiuawkjh
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log('queryString from App useEffect: ', queryString);
    console.log('urlParam from App useEffect: ', urlParams);
    console.log('codeParam from App useEffect: ', codeParam);

    // Local storage will persist with user
    if (codeParam && localStorage.getItem('accessToken') === null) {
      console.log('inside if statement!');

      async function getAccessToken() {
        await fetch('http://localhost:8080/getAccessToken?code=' + codeParam, {
          method: 'GET',
        })
          .then((response) => {
            console.log('data.access_token: ', response.access_token);
            return response.json();
          })
          .then((data) => {
            console.log('data: ', data);
            console.log('2nd .then!');
            console.log('data.access_token: ', data.access_token);
            if (data.access_token) {
              localStorage.setItem('accessToken', data.access_token);
              setRerender(!rerender);
            }
          });
      }
      getAccessToken();
    }
  }, []);

  async function getUserData() {
    await fetch('http://localhost:8080/getUserData', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('user data: ', data);
        setUserData(data);
      });
  }

  function loginWithGitHub() {
    localStorage.setItem('test', 'test123');
    window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
  }
  //'https://github.com/login/oauth/authorize?client_id=61d882059a1493003cbb'
  return (
    <div>
      <h1>Hiroba Hatchery FROM APP!</h1>
      {localStorage.getItem('accessToken') ? (
        <h1>We have the access token</h1>
      ) : (
        <>
          <h3>User is not logged in</h3>
          <button onClick={loginWithGitHub}>Login with GitHub</button>
        </>
      )}
    </div>
  );
}

export default App;
