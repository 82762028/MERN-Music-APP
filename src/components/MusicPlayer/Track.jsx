import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} max-custom-lg:w-[3rem] max-custom-lg:h-[3rem]  sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.image} alt="cover art" className="object-cover w-full h-full rounded-full" />
    </div>
    {/*
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong? activeSong?.artist.Nom : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong? activeSong?.titre : 'No active Song'}
      </p>
    </div>

*/}
  </div>
);

export default Track;