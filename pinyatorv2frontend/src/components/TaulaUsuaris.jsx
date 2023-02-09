import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import BASE_API_PATH from '../utils/constants';
import { BASE_WEB_URL } from '../utils/constants';

const TaulaUsuaris = () => {

  const [usuaris, setUsuaris] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_PATH}/users`)
      .then((res) => res.json())
      .then((data) => {setUsuaris(data)});
  }, []);

  function deleteUsuari(id) {
    const bodyReq = { idUsuari: id };
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(bodyReq),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    };

    fetch(`${BASE_API_PATH}/deleteuser`, reqOptions)
    .then(response => {response.json(); console.log("respjson: ", response)})
    .then(data => {console.log("Data: ", data); window.location.replace(`${BASE_WEB_URL}/configuracio`);})
    .catch((err) => console.log("Error: ", err));
  }

  const columns = [
    {
      name: "NOM D'USUARI",
      selector: row => row.nom,
    },
    {
      id: 'boto',
      button: true,
      cell: row =>(<button onClick={() => deleteUsuari(row.nom)} className="m-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Delete</button>)
    },
  ];

  const data = [];
  usuaris.map(usuari => (
    data.push(usuari)
  ));

  return (
    <div>
    <DataTable 
      columns={columns}
      data={data}
      responsive={true}
      highlightOnHover={true}
      theme="dark"
    />
    </div>
  )
}

export default TaulaUsuaris