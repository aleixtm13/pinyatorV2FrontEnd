import React from 'react'
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';

import BASE_API_PATH from '../utils/constants';

const TaulaCastellers = () => {

  const [castellers, setCastellers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_PATH}/castellers`)
      .then((res) => res.json())
      .then((data) => {setCastellers(data)});
  }, []);

  
  function deleteCasteller(id){

    const bodyReq = { idCasteller: id };
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(bodyReq),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    };

    fetch(`${BASE_API_PATH}/delete`, reqOptions)
    .then(response => {response.json(); console.log("respjson: ", response)})
    .catch((err) => console.log("Error: ", err));
  }


  const columns = [
    {
      id: 'id',
      name: 'Casteller_ID',
      selector: row => row.Casteller_ID,
      sortable: true,
    },
    {
      id: 'malnom',
      name: 'MalNom',
      selector: row => row.MalNom,
      sortable: true,
    },
    {
      id: 'nom',
      name: 'Nom',
      selector: row => row.Nom,
      sortable: true,
    },
    {
      id: 'cognom_1',
      name: 'Cognom 1',
      selector: row => row.Cognom_1,
      sortable: true,
    },
    {
      id: 'cognom_2',
      name: 'Cognom 2',
      selector: row => row.Cognom_2,
      sortable: true,
    },
    {
      id: 'posicio_pinya',
      name: 'POSICIO_PINYA_ID',
      selector: row => row.POSICIO_PINYA_ID,
      sortable: true,
    },
    {
      id: 'posicio_tronc',
      name: 'POSICIO_TRONC_ID',
      selector: row => row.POSICIO_TRONC_ID,
      sortable: true,
    },
    {
      id: 'altura',
      name: 'Altura',
      selector: row => row.Altura,
      sortable: true,
    },
    {
      id: 'estat',
      name: 'Estat',
      selector: row => row.Estat,
      sortable: true,
    },
    {
      id: 'boto',
      button: true,
      cell: row =>(<button onclick={deleteCasteller(row.Casteller_ID)} className="m-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Delete</button>)
    }
  ];

  const data = [];
  castellers.map(casteller => (
    data.push(casteller)
  ))

  return (
    <DataTable 
      columns={columns}
      data={data}
      responsive={true}
      highlightOnHover={true}
      theme="dark"
    />
  )
}

export default TaulaCastellers;