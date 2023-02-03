import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  
  const [nav, setNav] = useState(true);

  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        {/*Navbar normal*/}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]"><Link to="/">PinyatorV2</Link></h1>
        <ul className='hidden xl:flex'>
          <li className='p-4'><Link to="/castellers">Castellers</Link></li>
          <li className='p-4'><Link to="/esdeveniments">Esdeveniments</Link></li>
          <li className='p-4'><Link to="/plantilles">Plantilles</Link></li>
          <li className='p-4'><Link to="/assajos">Assaig/Actuació</Link></li>
          <li className='p-4'><Link to="/estadistiques">Estadístiques</Link></li>
          <li className='p-4'><Link to="/planificacio">Planificació</Link></li>
          <li className='p-4'><Link to="/configuracio">Configuració</Link></li>
        </ul>
        <div onClick={handleNav} className="block xl:hidden">
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        {/* Navbar phone*/}
        <div className={!nav ? 'fixed left-0 top-0 w-[65%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className="pt-4 m-4 w-full text-3xl font-bold text-[#00df9a]"><Link to="/">PinyatorV2</Link></h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><Link to="/castellers">Castellers</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/esdeveniments">Esdeveniments</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/plantilles">Plantilles</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/assajos">Assaig/Actuació</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/estadistiques">Estadístiques</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/planificacio">Planificació</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/configuracio">Configuració</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar