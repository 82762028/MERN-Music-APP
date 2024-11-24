import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import {MdOutlineClose} from "react-icons/md";
import  {useState, useEffect} from 'react'
import React, { useRef } from 'react';
import { toggleMusicPlayerVisibility } from './redux/features/playerSlice'; 
import { playPause,setActiveSong } from './redux/features/playerSlice';
import Footer from './components/Footer';



const App = () => {
 
 
  const isMusicPlayerVisible = useSelector((state) => state.player.isMusicPlayerVisible);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const { activeSong } = useSelector((state) => state.player);
  const handleStopMusic = () => {
   
    dispatch(toggleMusicPlayerVisibility());

     // Utilisez l'action pour basculer la visibilité du lecteur de musique
     dispatch(playPause(false));
    if (audioRef.current) {
      audioRef.current.pause();
    }
    // Ajoutez ici toute logique supplémentaire pour arrêter la musique si nécessaire
  };
  return (
    <div className="relative flex max-custom-lg:overflow-x-hidden max-custom-lg:overflow-y-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
 
      <Searchbar />


        <div className="px-6 brow  h-[100vh] overflow-y-scroll hide-scrollbar flex custom-lg:flex-row-reverse flex-col-reverse">
          <div className=" flex-1 h-fit pb-40 top-10 ">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:songid" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="max-custom-lg:hidden custom-lg:sticky relative top-0 h-fit custom-lg:w-[350px] custom-lg:ml-0">
            <TopPlay />
          </div>
        </div>
     
      </div>


      {isMusicPlayerVisible && activeSong?.titre && (
        <div className="absolute  max-custom-lg:h-[6rem] h-20 bottom-0 max-custom-lg:bottom-[5.5rem] left-1  custom-lg:left-5 custom-lg:right-5 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10 max-custom-lg:rounded-full overflow-y-hidden">
   
          <MusicPlayer />

          <button className=' absolute right-2 top-2' onClick={handleStopMusic}>
            <MdOutlineClose 
            size={30}
    className='text-gray-100 shadow-lg' 
     />
    </button>
        </div>
      )}
    </div>
  );
};

export default App;
