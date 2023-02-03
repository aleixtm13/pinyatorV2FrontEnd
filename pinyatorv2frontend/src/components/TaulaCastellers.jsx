import React from 'react'
import BodyTaulaCastellers from './BodyTaulaCastellers';

const TaulaCastellers = () => {


  return (
    <div className='text-white border border-white items-center'>
        <table className='table-auto'>
            <thead className='flex'>
                <tr>
                    <th className='px-3'>ID</th>
                    <th className='px-3'>Malnom</th>
                    <th className='px-3'>Nom</th>
                    <th className='px-3'>Cognoms</th>
                    <th className='px-3'>Posicio Pinya</th>
                    <th className='px-3'>Posicio Troncs</th>
                    <th className='px-3'>Altura</th>
                    <th className='px-3'>Estat</th>
                </tr>
            </thead>
            <tbody>
              <BodyTaulaCastellers/>
            </tbody>
        </table>
    </div>
  )
}

export default TaulaCastellers;