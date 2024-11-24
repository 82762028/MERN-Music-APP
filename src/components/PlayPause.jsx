import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { toggleMusicPlayerVisibility } from '../redux/features/playerSlice'; // Assurez-vous d'importer correctement l'action
import { useSelector, useDispatch } from "react-redux";

const PlayPause = ({isPlaying,activeSong, song, handlePause, handlePlay}) => {
  const dispatch = useDispatch();
  const isMusicPlayerVisible = useSelector((state) => state.player.isMusicPlayerVisible);
  const handlePlayPause = () => {
    // Si la musique est en pause et le lecteur est invisible, montrez le lecteur
    
    if (isMusicPlayerVisible==false) {
    dispatch(toggleMusicPlayerVisibility());
    }
    handlePlay();

  }
return(isPlaying && activeSong?.titre === song.titre ? (
  <FaPauseCircle 
    size={35}
    
    className='text-gray-300'
    onClick = {handlePause}
  />
)
  :(<FaPlayCircle
    size={35}
    className='text-gray-300'
    onClick = {handlePlayPause}
    />)
  
  )
  }

export default PlayPause;
