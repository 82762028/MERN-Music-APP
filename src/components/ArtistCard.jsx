import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
   const navigate = useNavigate();
   return(
    <div className="flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={()=>navigate(`/artists/${track?._id}`)}>
     <img alt="artist" src={track?.image} className=" object-cover w-full h-[220px] rounded-lg"/>
     <p className="mt-4 font-semibold text-lg text-white">{track?.artist.Nom}</p>
    </div>
   )
};

export default ArtistCard;
