import React from 'react'
import { Link } from 'react-router-dom';

import TaulaCastellers from '../components/TaulaCastellers';

const Castellers = () => {

  {/* Ha de mostrar una taula amb els atributs importants de tots els castellers de la base de dades */}
  return (
    <div>
      <Link to="add">
      <button className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Nou Casteller
      </button>
      </Link>
      <TaulaCastellers/>
    </div>
  )
}

export default Castellers