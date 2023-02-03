import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        {/*Navbar normal*/}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">PinyatorV2</h1>
        <ul className='hidden xl:flex'>
          <li className='p-4'>Castellers</li>
          <li className='p-4'>Esdeveniments</li>
          <li className='p-4'>Plantilles</li>
          <li className='p-4'>Assaig/Actuació</li>
          <li className='p-4'>Estadístiques</li>
          <li className='p-4'>Planificació</li>
          <li className='p-4'>Configuració</li>

        </ul>
        <div onClick={handleNav} className="block xl:hidden">
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        {/* Navbar phone*/}
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className="pt-4 m-4 w-full text-3xl font-bold text-[#00df9a]">PinyatorV2</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Castellers</li>
            <li className='p-4 border-b border-gray-600'>Esdeveniments</li>
            <li className='p-4 border-b border-gray-600'>Plantilles</li>
            <li className='p-4 border-b border-gray-600'>Assaig/Actuació</li>
            <li className='p-4 border-b border-gray-600'>Estadístiques</li>
            <li className='p-4 border-b border-gray-600'>Planificació</li>
            <li className='p-4 border-b border-gray-600'>Configuració</li>
            <li className='p-4'>Login</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar