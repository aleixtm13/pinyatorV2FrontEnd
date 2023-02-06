import React, { useRef } from 'react'
import { BASE_WEB_URL } from '../utils/constants';
import BASE_API_PATH from '../utils/constants';

const FormNewUsuari = () => {

  const usernameRef = useRef();
  const pwdRef = useRef();
  const carrecRef = useRef();
  const adminRef = useRef();
  const eventsRef = useRef();
  const addCastellerRef = useRef();
  const addCastellRef = useRef();
  const capCollaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const pwd = pwdRef.current.value;
    const carrec = carrecRef.current.value;
    const admin = adminRef.current.value;
    const segevent = eventsRef.current.value;
    const segcastellers = addCastellerRef.current.value;
    const segcastells = addCastellRef.current.value;
    const segboss = capCollaRef.current.value;

    const bodyRequest = {
      nom: username,
      password: pwd,
      carrec: carrec,
      segadmin: admin,
      segcasteller: segcastellers,
      segcastell: segcastells,
      segevent: segevent,
      segboss: segboss
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    };

    fetch(`${BASE_API_PATH}/adduser`, requestOptions)
      .then(response => {response.json(); console.log("respjson: ", response)})
      .then(data => {console.log("Data: ", data); window.location.replace(`${BASE_WEB_URL}/configuracio`);})
      .catch((err) => console.log("Error: ", err));

  }


  return (
    <div>
      <h1 className='text-white underline text-2xl font-bold mt-0 flex justify-center'>Configuració</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div className='m-4 text-white grid'>
            <label>Nom d'usuari</label>
            <input className='text-black' type="text" name="username" placeholder="Escriu el nom d'usuari" ref={usernameRef} required/> <br/>
            <label>Contrasenya</label>
            <input className='text-black' type="password" name="password" placeholder="Escriu la contrasenya" ref={pwdRef} required/> <br/>
            <label>Càrrec</label>
            <select className='text-black' name="carrec" ref={carrecRef} required>
              <option value="0">Sense càrrec</option>
              <option value="1">Pinyes</option>
              <option value="2">Troncs</option>
            </select>
            <br/>
            <br/>
            <h1 className='text-2xl font-bold underline mt-6'>Privilegis</h1>
            <label>Rol administrador</label>
            <input className='ml-0 mr-auto mb-3 mt-2' type="checkbox" name="admin" value="1" ref={adminRef}/>
            <br/>
            <br/>
            <label>Modificació d'esdeveniments</label>
            <select className='text-black' name="segevent" ref={eventsRef} required>
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>Modificació de castellers</label>
            <select className='text-black' name="segcastellers" ref={addCastellerRef} required>
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>Modificació de castells</label>
            <select className='text-black' name="segcastells" ref={addCastellRef} required>
              <option value="0">Sense accés</option>
              <option value="1">Lectura</option>
              <option value="2">Escriptura</option>
            </select>
            <br/>
            <label>És cap de colla</label>
            <select className='text-black' name="segboss" ref={capCollaRef} required>
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