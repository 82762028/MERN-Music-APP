import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine}  from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";
import {logo} from '../assets';
import { Link } from "react-router-dom";
import { links } from "../assets/constants";
import {RiNotificationBadgeFill} from 'react-icons/ri';
import {BiSolidVideos} from 'react-icons/bi'
const NavLinks = ({handleClick })=>(
   <div className="mt-8">
    {links.map((item)=>(
      <NavLink 
      key={item.name}
      to={item.to}
      className="flex flex-row justify-start items-center my-5 text-[0.8rem] font-medium text-gray-400  hover:text-cyan-400"
      onClick={()=> handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
          {item.name}
      
      </NavLink>
      
    ))}

   </div>
);
const Sidebar = () =>{ 
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      
      <div className=" h-[100vh] custom-lg:flex hidden flex-col  px-4 bg-[#191624] pt-5">

        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
   <NavLinks />
      </div>
    
    <div className="absolute custom-lg:hidden block  right-3 z-[1000] mt-5">
      { mobileMenuOpen ? (
       <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={()=> setMobileMenuOpen(false)} />
      ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={()=> setMobileMenuOpen(true)} />}

    </div>


       
      <div className={`z-[999] absolute top-0 h-screen w-3/3 bg-[#191624] mt-4 p-6 custom-lg:hidden smooth-transition ${mobileMenuOpen ? 'left-0':'-left-full' }`}>


   <NavLinks handleClick={()=> setMobileMenuOpen(false)} />
   <div className='flex flex-col '>
      <Link to="/actus" className='mt-3 mb-3 flex  flex-row text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3'>
      Clip <BiSolidVideos className='w-5 h-5' />
      </Link>
          <Link to="/actus" className='mt-3 mb-3 flex  flex-row text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500'>
      Actus <RiNotificationBadgeFill className='w-5 h-5' />
      </Link>
      
      </div>
      <hr className="w-full mb-5 mt-2"/>
   <div className='flex flex-row '>
   <Link className='mt-1 text-white transition-[.5s]  from-red-400 via-red-500 to-red-600 hover:border border-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-80 font-medium rounded-lg text-sm px-5 py-2 text-center ml-1' to="/connecter"> connexion</Link>
          <Link className='mt-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1' to="/inscrire">s'inscrire</Link>
     </div>
      </div>
    
    </>
  )
  }


export default Sidebar;
