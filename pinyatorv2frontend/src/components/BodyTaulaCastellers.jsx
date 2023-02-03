import React from 'react'
import { useState, useEffect } from 'react';

import BASE_API_PATH from '../utils/constants';

const BodyTaulaCastellers = () => {

  const [castellers, setCastellers] = useState({});

  useEffect(() => {
    fetch(`${BASE_API_PATH}/castellers`)
      .then((res) => res.json())
      .then((data) => setCastellers(data));
  });

  return (
        {/* Per cada casteller, fem un tr, i els td son cada atribut de la query */}
  )
}

export default BodyTaulaCastellers