import SongBar from './SongBar'
const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick,handlePlayClick,artistId}) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>
      Related Song:
    </h1>
<div className='mt-6 w-full flex flex-col'>
  {
    data?.map((song,i)=>(
      <SongBar 
      key={`${song?._id}- ${song?.artistid}`}
      song={song}
      artistId={artistId}
      isPlaying={isPlaying}
      i={i}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
       />
    ))
  }
</div>
  </div>
);

export default RelatedSongs;
