import React, { useState, useEffect } from 'react';

import BASE_API_PATH from './utils/constants';
import logo from './logo.svg';
import './App.css';

const App = () => {

  useEffect(() => {
    fetch(`${BASE_API_PATH}/users`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5a%2FEscut_dels_Sagals_d%2527Osona.jpg&imgrefurl=https%3A%2F%2Fca.wikipedia.org%2Fwiki%2FSagals_d%2527Osona&tbnid=PDIXT71a_ldpcM&vet=12ahUKEwiaxOS15Pf8AhWXpCcCHff8Cd4QMygAegQIARAy..i&docid=CWV7E-5x7MhxzM&w=720&h=720&q=escut%20sagals&ved=2ahUKEwiaxOS15Pf8AhWXpCcCHff8Cd4QMygAegQIARAy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinyator V2
        </a>
      </header>
    </div>
  );
}

export default App;
