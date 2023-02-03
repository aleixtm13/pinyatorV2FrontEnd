import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import BASE_API_PATH from './utils/constants';


const App = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${BASE_API_PATH}/users`)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
