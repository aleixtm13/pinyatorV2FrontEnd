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
  });

  const columns = [
    {
      name: 'Casteller_ID',
      selector: row => row.Casteller_ID,
      sortable: true,
    },
    {
      name: 'MalNom',
      selector: row => row.MalNom,
      sortable: false,
    },
    {
      name: 'Nom',
      selector: row => row.Nom,
      sortable: false,
    },
    {
      name: 'Cognom 1',
      selector: row => row.Cognom_1,
      sortable: false,
    },
    {
      name: 'Cognom 2',
      selector: row => row.Cognom_2,
      sortable: false,
    },
    {
      name: 'POSICIO_PINYA_ID',
      selector: row => row.POSICIO_PINYA_ID,
      sortable: false,
    },
    {
      name: 'POSICIO_TRONC_ID',
      selector: row => row.POSICIO_TRONC_ID,
      sortable: false,
    },
    {
      name: 'Altura',
      selector: row => row.Altura,
      sortable: false,
    },
    {
      name: 'Estat',
      selector: row => row.Estat,
      sortable: false,
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