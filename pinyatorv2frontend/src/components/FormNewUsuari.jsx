import React from 'react'

const FormNewUsuari = () => {
  return (
    <div>
      <h1 className='text-white underline text-2xl font-bold mt-0 flex justify-center'>Configuració</h1>
        <form method='POST'>
          <div className='m-4 text-white grid'>
            <label>Nom d'usuari</label>
            <input className='text-black' type="text" name="username" placeholder="Escriu el nom d'usuari"/> <br/>
            <label>Contrasenya</label>
            <input className='text-black' type="password" name="password" placeholder="Escriu la contrasenya"/> <br/>
            <label>Càrrec</label>
            <select className='text-black' name="carrec">
              <option value="0">Sense càrrec</option>
              <option value="1">Pinyes</option>
              <option value="2">Troncs</option>
            </select>
            <br/>
            <br/>
            <h1 className='text-2xl font-bold underline mt-6'>Privilegis</h1>
            <label>Rol administrador</label>
            <input className='ml-0 mr-auto mb-3 mt-2' type="checkbox" name="admin" value="1"/>
            <br/>
            <br/>
            <label>Modificació d'esdeveniments</label>
            <select className='text-black' name="segevent">
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>Modificació de castellers</label>
            <select className='text-black' name="segcastellers">
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>Modificació de castells</label>
            <select className='text-black' name="segcastells">
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>És cap de colla</label>
            <select className='text-black' name="segboss">
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <button className="mt-4 w-20 ml-auto mr-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
      type="submit">Desa</button>
          </div>
        </form>
      </div>
  )
}

export default FormNewUsuari