import React from 'react';
import { Link } from 'react-router-dom';
import TaulaUsuaris from '../components/TaulaUsuaris';

const Configuracio = () => {
  return (
    <div>
      <Link to="adduser">
        <button className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Afegir Usuari
        </button>
      </Link>
      <TaulaUsuaris/>
    </div>
    
  )
}

export default Configuracio