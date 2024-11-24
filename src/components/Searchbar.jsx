import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {RiNotificationBadgeFill} from 'react-icons/ri';
import {BiSolidVideos} from 'react-icons/bi'
import {logo} from '../assets';
import {Link} from 'react-router-dom'

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

return (
   <form onSubmit={handleSubmit} autoComplete="off" className=" custom-lg:justify-end bg-[#191624] w-[calc(100%-162px)] text-gray-400  focus-within:text-gray-600 absolute z-[999] max-custom-lg:w-full  flex flex-row">
      <img src={logo} alt="logo" className="custom-lg:hidden mx-5 mt-2 m-1 w-14 h-10 object-contain" />
    <label htmlFor="search-field" className="sr-only">
      Search all Songs
    </label>
    <div className="flex flex-row justify-start items-center custom-lg:w-[70%]">
  <FiSearch className='w-5 h-5 ml-4'/>
  <input 
    name='search-field'
    autoComplete='off'
    id='search-field'
    placeholder='Search'
    type='search'
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
    className='max-custom-lg:w-[10em] custom-lg:w-[100%] flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4'
  />
    </div>
    <div className='max-custom-lg:hidden flex  flex-row'>

      <div className='flex flex-row '>
      <Link to="/actus" className='mt-3 mb-3 flex  flex-row text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3'>
      Clip <BiSolidVideos className='w-5 h-5' />
      </Link>
          <Link to="/actus" className='mt-3 mb-3 flex  flex-row text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500'>
      Actus <RiNotificationBadgeFill className='w-5 h-5' />
      </Link>
      
      </div>
           <div className='flex flex-row mr-5'>
           <Link className='mt-3 text-white transition-[.5s]  from-red-400 via-red-500 to-red-600 hover:border border-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3' to="/connecter"> connexion</Link>
          <Link className='mt-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 ' to="/inscrire">s'inscrire</Link>
     
           </div>
         
      </div>
   
   </form>)
};

export default Searchbar;
