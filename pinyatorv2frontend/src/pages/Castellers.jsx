import React from 'react'

import TaulaCastellers from '../components/TaulaCastellers';

const Castellers = () => {

  {/* Ha de mostrar una taula amb els atributs importants de tots els castellers de la base de dades */}
  return (
    <div>
      <button className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Nou Casteller
      </button>
      <TaulaCastellers/>
    </div>
  )
}

export default Castellers