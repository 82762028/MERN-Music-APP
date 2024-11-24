import React from 'react';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components'
import {  useGetTopChartsQuery } from '../redux/services/ApiToRecupere';
import { useParams } from 'react-router-dom';


const Search = () => {
    const {searchTerm} = useParams()
    const {activeSong, isPlaying} = useSelector((state)=> state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
  
    if(isFetching) return <Loader title="Loading songs Top Charts ..." />
    if (error) {
        return <Error />; // Gérer les erreurs de requête.
      }

      const filteredData = data.filter((item) => item.titre.toLowerCase().includes(searchTerm.toLowerCase())?item:'')
      console.log(filteredData)
    return (
        <div className='flex flex-col'>
           <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing results for <span className='font-black'>{searchTerm}</span>
            </h2>
            <div className='flex flex-wrap custom-lg:justify-center justify-center gap-8'>
                {filteredData?.map((song,i)=>(
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

export default Search;
