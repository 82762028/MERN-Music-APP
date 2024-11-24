import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components'
import {  useGetTopChartsQuery } from '../redux/services/ApiToRecupere';
import { useRef } from 'react';



const AroundYou = () => {
    const [country, setCountry]= useState('');
    const [loading,setLoading]= useState(true);
    const {activeSong, isPlaying} = useSelector((state)=> state.player);
    const { data: data_recus, isFetching, error } = useGetTopChartsQuery();
    const divRef = useRef(null); // Initialisez divRef ici

   
    useEffect(()=>{
//at_OlejyCW0TlikPW1OpFIfLdZ9w7tNu        
axios
.get('http://ip-api.com/json/')
.then((res) => {
  console.log(res.data); // Pour vérifier les données reçues.
  setCountry(res?.data?.country || 'Unknown');
})
.catch((err) => console.error('Error fetching data from ip-api:', err));


    }, [country]); 



    useEffect(() => {
        if (divRef.current) {
          divRef.current.scrollIntoView({
            top: 0,
            behavior: 'smooth',
          });
        }
      }, [data_recus]); 

    if(isFetching && loading) return <Loader title="Loading songs around you ..." />
    if (error && country) {
        return <Error />; // Gérer les erreurs de requête.
      }

     const data = data_recus?.filter(item => item.pays===country);
     console.log(data)

     
    return (
        <div className='flex flex-col' ref={divRef}>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You
            <span className='font-black'> {country}</span>
            </h2>
            <div className='flex flex-wrap custom-lg:justify-center justify-center gap-8'>
                {data?.map((song,i)=>(
                    <SongCard
                     key={song._id}
                     isPlaying={isPlaying}
                     song={song}
                     activeSong={activeSong}
                     data={data}
                     i={i}
                    />
                ))}
            </div>

        </div>
    )
}

export default AroundYou;
