import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Castellers from './pages/Castellers';
import Configuracio from './pages/Configuracio';
import Assajos from './pages/Assajos';
import Esdeveniments from './pages/Esdeveniments';
import Planificacio from './pages/Planificacio';
import Plantilles from './pages/Plantilles';
import Estadistiques from './pages/Estadistiques';
import AddCasteller from './pages/AddCasteller';

import BASE_API_PATH from './utils/constants';



const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/castellers' element={<Castellers/>}/>
        <Route path='/castellers/add' element={<AddCasteller/>}/>
        <Route path='/esdeveniments' element={<Esdeveniments/>}/>
        <Route path='/plantilles' element={<Plantilles/>}/>
        <Route path='/assajos' element={<Assajos/>}/>
        <Route path='/estadistiques' element={<Estadistiques/>}/>
        <Route path='/planificacio' element={<Planificacio/>}/>
        <Route path='/configuracio' element={<Configuracio/>}/>
      </Routes>
    </div>
  );
}

export default App;
