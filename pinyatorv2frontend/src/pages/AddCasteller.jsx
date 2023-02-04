import React from 'react';
import { useRef, setState} from 'react';
import BASE_API_PATH from '../utils/constants';

const AddCasteller = () => {

  {/* Refs dels inputs del formulari que farem servir per després
      crear la http request per el servidor que inserti el casteller. */}
  const malnomRef = useRef();
  const alturaRef = useRef();
  const forcaRef = useRef();
  const pinyaRef = useRef();
  const nomRef = useRef();
  const cognom1Ref = useRef();
  const cognom2Ref = useRef();
  const familiaRef = useRef();
  const estatRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const malnom = malnomRef.current.value;
    const altura = alturaRef.current.value;
    const forca = forcaRef.current.value;
    const posPinya = pinyaRef.current.value;
    const nom = nomRef.current.value;
    const cognom1 = cognom1Ref.current.value;
    const cognom2 = cognom2Ref.current.value;
    const familia = familiaRef.current.value;
    const estat = estatRef.current.value;
    
    const bodyReq = {
      malNom: malnom,
      altura: altura,
      forca: forca,
      posicioPinya: posPinya,
      nom: nom,
      cognom_1: cognom1,
      cognom_2: cognom2,
      family: familia,
      state: estat
    }


    console.log("body nostre:", JSON.stringify(bodyReq));


    const requestOptions = {
      method: "POST",
      body: JSON.stringify({}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    };

    {/* Peta d'alguna manera perquè passa el body de la request buit al servidor. */}
    fetch(`${BASE_API_PATH}/addcasteller`,requestOptions)
      .then(response => {response.json(); console.log("respjson: ", response)})
      .then(data => {console.log("Data: ", data)})
      .catch((err) => console.log("Error: ", err));

  }

  return (
    <div className='flex justify-center items-center mb-3'>
    <div className='border-2 border-rounded border-gray-500'>
    <form className='m-2' method='POST' onSubmit={handleSubmit}>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Malnom">Malnom</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="malnom" type="text" ref={malnomRef} required/>
      </div>
      <div className='ffont-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Nom">Nom</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="nom" type="text" ref={nomRef} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Cognom1">Cognom 1</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="cognom_1" type="text" ref={cognom1Ref} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Cognom2">Cognom 2</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="cognom_2" type="text" ref={cognom2Ref} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Posicio">Posicio Pinya</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="posicio" type="number" ref={pinyaRef} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Altura">Altura</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="altura" type="number" ref={alturaRef} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Forca">Força</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="forca" type="number" ref={forcaRef} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Familia">Padrí/na</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="familia" type="number" ref={familiaRef} required/>
      </div>
      <div className='font-bold text-3xl text-gray-400 mb-3'>
        <label htmlFor="Estat">Estat</label>
        <br/>
        <input className="text-black text-xl border-[3px] border-rounded border-gray-500" id="Estat" type="number" ref={estatRef} required/>
      </div>
      <button className="mt-3 mx-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
      type="submit">Afegir casteller</button>
    </form>
    </div>
    </div>
  );
};

export default AddCasteller;