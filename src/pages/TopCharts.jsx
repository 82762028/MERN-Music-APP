import React from 'react';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components'
import {  useGetTopChartsQuery } from '../redux/services/ApiToRecupere';

import { useRef,useEffect } from 'react'


const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector((state)=> state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
    const divRef = useRef(null); // Initialisez divRef ici
    useEffect(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, [data]); 
    if(isFetching) return <Loader title="Loading songs Top Charts ..." />
    if (error) {
        return <Error />; // Gérer les erreurs de requête.
      }

    return (
        <div className='flex flex-col' ref={divRef}>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover TopCharts
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

export default TopCharts;
