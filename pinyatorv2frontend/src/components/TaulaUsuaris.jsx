import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import BASE_API_PATH from '../utils/constants';

const TaulaUsuaris = () => {

  const [usuaris, setUsuaris] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_PATH}/users`)
      .then((res) => res.json())
      .then((data) => {setUsuaris(data)});
  }, []);

  const columns = [
    {
      name: "NOM D'USUARI",
      selector: row => row.nom,
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