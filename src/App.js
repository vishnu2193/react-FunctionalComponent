import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import AccountMenu from './AccountMenu';

const App = () => {
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
        <h2>Movies</h2>
        <AccountMenu style={{}} />
      </Paper>

      {posts.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.title}</h2>

            <hr />
          </div>
        );
      })}
    </>
  );
};
export default App;
