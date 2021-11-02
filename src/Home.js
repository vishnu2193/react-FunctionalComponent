import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import AccountMenu from './Components/AccountMenu';
import Tabb from './Components/Tabb';

const Router = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchnews = () => {
      // Update the document title using the browser API
      axios({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((responce) => {
          setPosts(responce.data);
        })
        .catch();
    };
    fetchnews();
  }, []);

  return (
    <>
      <Paper square elevation={5} style={{ display: 'flex', width: '1000%' }}>
        <img
          style={{ width: '190px', height: '80px' }}
          src="https://www.vhv.rs/dpng/d/134-1343401_movie-film-strip-clipart-transparent-background-film-logo.png"
        />

        <AccountMenu style={{}} />
      </Paper>
      <Tabb />
      {posts.map((item, i) => {
        return <div key={i}></div>;
      })}
    </>
  );
};
export default Router;
