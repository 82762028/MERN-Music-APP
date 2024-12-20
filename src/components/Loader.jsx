import {loader} from '../assets'
import { useRef } from 'react';
import  {useState, useEffect} from 'react'
const Loader = ({title}) => {
 
  
 return (<div className='w-full flex justify-center items-center flex-col custom-lg:mt-0'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>

    <h1 className='font-bold text-2xl text-white mt-2'>{title || "Loading..."}</h1>

  </div>)
}

export default Loader;
