
import {Link, useParams} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux';
import { DetailsHeader,Error,Loader,RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useRef,useEffect } from 'react';

import { useGetTopChartsQuery } from '../redux/services/ApiToRecupere';
import { IoIosArrowRoundBack } from 'react-icons/io';
const ArtistDetails = () => {
  
      
    const dispatch = useDispatch();
    const {activeSong,isPlaying}=useSelector((state)=> state.player)
    const {songid} = useParams();
   // const {data_recus} = useGetTopChartsQuery();
   // const song = data_recus?.find(item => item._id === songid);

    //const {data} = data_recus?.filter(item => item?.categorie ===song?.categorie)
    const { data: data_recus, isLoading, isError } = useGetTopChartsQuery();
// ...
const divRef = useRef(null); // Initialisez divRef ici

useEffect(() => {
  if (divRef.current) {
    divRef.current.scrollIntoView({
      top: 0,
      behavior: 'smooth',
    });
  }
}, [data_recus]);
if (isLoading) {
  return <Loader title="En cours de chargement..."/>; // Afficher un indicateur de chargement si la requête est en cours.
}

if (isError) {
  return <Error />; // Gérer les erreurs de requête.
}

// Si la requête est réussie et que data_recus est défini, vous pouvez alors extraire data.
const song = data_recus?.find(item => item._id === songid);
const data = data_recus?.filter(item => item.artistid == song?.artistid);
    const handlePauseClick = ()=>{
        dispatch(playPause(false));
      }
      const handlePlayClick = (song,i)=>{
        dispatch(setActiveSong({song,data,i}));
        console.log("me",data)
        dispatch(playPause(true));
      }
 
    
    
    
    return (
        <div className='custom-lg:m-5 flex flex-col' ref={divRef}>
                 <div className='mt-[3rem] mb-[-5rem] custom-lg:mt-[4.5rem] custom-lg:mb-[-4.5rem] flex flex-row justify-between items-center'>
          <Link to={`/`} >
            <IoIosArrowRoundBack 
             size={55} className='text-gray-300 mt-4 custom-lg:ml-2 cursor-pointer'/>
          </Link>
      <h2 className='font-bold text-xl text-white text-left'>Decouvrir {song?.artist.Nom}</h2>
      </div>
         <DetailsHeader artistId="" songData={song} />
         <div className='mb-10'>
            <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
            <div className='flex flex-col'>

                <div className='mb-5'>
                   {
                    song? <p className='text-gray-400 text-base my-1'>Titre: {song.titre} <br/>
                             Album: {song.albums?.Nom_album} <br/>
                             Artiste: {song.artist.Nom}   <br/>
                             Mise en ligne: {new Date(song.Fait_Date).toLocaleDateString("fr-FR", {
                                             year:"numeric",
                                             month:"long",
                                             day:"numeric"
                     })}    <br/>
                             Mention J'aime: {song.likers?.length} <br/>
                    </p>
                    :<p className='text-gray-400 text-base my-1'>Desolé , lyrics non trouvé!</p>

                   }
                </div>



            </div>

         </div>

         <RelatedSongs data={data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
         />
        </div>
    )
};

export default ArtistDetails;