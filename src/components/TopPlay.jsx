


import { useEffect,useRef } from "react";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {Swiper,SwiperSlide} from "swiper/react"
import { FreeMode } from "swiper";
import 'swiper/css'
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/ApiToRecupere";
import Loader from "./Loader";
import 'swiper/css/pagination'
import {Pagination,Autoplay} from 'swiper';


const TopChartCard=({song,i,activeSong,isPlaying,handlePauseClick,handlePlayClick})=>{
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    handlePlayClick(song, i);
  };

  return(
<div className=" w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
 <div className="flex-1 flex flex-row justify-between items-center">

  <img className="object-cover w-20 h-20  rounded-lg" src={song?.image} alt={song.titre}/>
  <div className="flex-1 flex flex-col justify-center mx-3">
    <Link to={`/songs/${song._id}`}>
      <p className="text-[16px] font-bold text-white">
       
       {
              song?.titre
       }

      </p>
    </Link>


    <Link className="flex" to={`/artists/${song._id}`}>
      <p className="text-base  text-gray-300 mt-1">
       
       {
          song?.artist.Nom
 
       }

      </p>
    </Link>

    <p className="text-[0.8rem]  text-gray-400 mt-1">03:50</p>






  </div>
 </div>
 <PlayPause
  isPlaying={isPlaying}
  activeSong={activeSong}
  song={song}
  handlePause={handlePauseClick}
  handlePlay={handlePlayClick}
 
 />

  </div>

  )
  
}


const TopPlay = () => {
   const dispatch = useDispatch();
   const {activeSong, isPlaying} = useSelector((state)=>state.player);
const {data} = useGetTopChartsQuery();
const topPlays = data?.slice(0,5)
/*
const divRef =useRef(null);
useEffect(()=>{
 
  divRef.current.scrollIntoView({

    behavior: 'smooth'
  })

})*/

const handlePauseClick = ()=>{
  dispatch(playPause(false));
}
const handlePlayClick = (song,i)=>{
  dispatch(setActiveSong({song,data,i}));
  dispatch(playPause(true));
}

return (

  <>

  <div   className="custom-lg:hidden custom-lg:top-20 custom-lg:absolute xl:ml-6 ml-0 mb-6 flex-1 xl:max-w-[400px] max-w-full flex flex-col custom-lg:overflow-y-scroll custom-lg:h-[100vh]">
    

    <div className='custom-lg:hidden items-center custom-lg:gap-6  px-1 w_slid' style={{marginTop:'10rem !important'}}>
   
   <Swiper      
    slidesPerView={1} spaceBetween={20}
     breakpoints={{
       768:{
         slidesPerView: 1,
   
       }
   }}
   speed={1000}
   loop={true} autoplay={{
     delay:4000,
   }}
   pagination={{
     clickable:true,
   }}
   modules={[Pagination,Autoplay]}
   >

<SwiperSlide>


<div className='  mt-[4rem] min-h-[58vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl'
 style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/back.jpg)'
}}>
<div className='text-left  my-10'>
<h2 className='h2-slide md:leading-normal leading-10 text-white font-bold'>
 <span className='text-orange-600 span-slide'>
 
Bienvenue Sur EvMusic!! <br />
 </span>
 Sur<span> Le site Favorite du gospel en  streamings  </span> Savourez les meilleurs
 de tous genres 
 </h2>
 <div className='flex flex items-center justify-center m-10'>

       <button className='mt-3 mb-3 flex  flex-row text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-oran-ge-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500'>Découvrir</button> 
      
 </div>
</div>

</div>
</SwiperSlide>
<SwiperSlide>


<div className='  mt-[4rem] min-h-[58vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl' style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/1arya.jpg)'
}}>
<div className='text-left  my-10'>
<h2 className='h2-slide md:leading-normal leading-10 text-white font-bold'>
 <span className='text-orange-600 span-slide'>
 
 New Single Ayra Starr!! <br />
 </span>
 Sur<span> Le site Favorite du gospel en  streamings  </span> Savourez les meilleurs
 de tous genres 
 </h2>
 <div className='flex flex items-center justify-center m-10'>

       <button className='mt-3 mb-3 flex  flex-row text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-oran-ge-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500'>Découvrir</button> 
      
 </div>
</div>

</div>
</SwiperSlide>
<SwiperSlide>


<div className='  mt-[4rem] min-h-[58vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl' 
style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/1cardi.jpg)'
}}
>
<div className='text-left my-10'>
<h2 className='h2-slide md:leading-normal leading-10 text-white font-bold'>
 <span className='text-orange-600 span-slide'>
 
 Disponible new single  cardy B <br />
 </span>
 Sur<span> Le site Favorite du gospel en  streamings  </span> Savourez les meilleurs
 de tous genres 
 </h2>
 <div className='flex flex items-center justify-center m-10'>

       <button className='mt-3 mb-3 flex  flex-row text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-oran-ge-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500'>Découvrir</button> 
      
 </div>
</div>

</div>
</SwiperSlide>
<SwiperSlide>


<div className='  mt-[4rem] min-h-[58vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl' 
style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/nikki3.jpg)'
}}
>
<div className='text-left my-10'>
<h2 className='h2-slide md:leading-normal leading-10 text-white font-bold'>
 <span className='text-orange-600 span-slide'>
 
Special concert Nikki <br />
 </span>
 Sur<span> Le site Favorite du gospel en  streamings  </span> Savourez les meilleurs
 de tous genres 
 </h2>
 <div className='flex flex items-center justify-center m-10'>

       <button className='mt-3 mb-3 flex  flex-row text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-oran-ge-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500'>Découvrir</button> 
      
 </div>
</div>

</div>
</SwiperSlide>
</Swiper>


</div>




   <div className="w-full flex flex-col custom-lg:mt-0 mt-20 max-custom-lg:mt-[1rem]">
    <div className="flex flex-row justify-between items-center">

      <h2 className="text-white font-bold text-2xl">Top Charts</h2>
      <Link to="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
      </Link>

    </div>

    <div className="mt-4 flex flex-col gap-1">

      {
      topPlays?.map((song,i)=>(
        <TopChartCard
         key={song._id}
         song={song} 
         i={i}
         isPlaying={isPlaying}
         activeSong={activeSong}
         handlePauseClick={handlePauseClick}
         handlePlayClick={()=> handlePlayClick(song,i)}
        />
        
      ))
      }

    </div>

   </div>
   
   <div className="w-full flex flex-col mt-8 custom-lg:mb-20 max-custom-lg:mb-[-2rem]">

 

   <div className="flex flex-row justify-between items-center">

<h2 className="text-white font-bold text-2xl">Top Artists</h2>
<Link to="/top-artists">
  <p className="text-gray-300 text-base cursor-pointer">See more</p>
</Link>
 
</div>

<Swiper 
slidesPerView="auto"
spaceBetween={15}
freeMode
centeredSlides
centeredSlidesBounds
modules={[FreeMode]}
className="mt-4 absolute w_slid"
>
{
  topPlays?.map((song,i)=>(
    <SwiperSlide
     key={song?._id}
     style={{width:'45%', marginBottom:'0px !important', height:'auto'}}
     className="rounded-full animate-slideright"
     >

      <Link to={`/artists/`} >
       
      <div className="relative p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer w-full" style={{overflow: 'hidden !important',textAlign:'center' }}>
 
  <img style={{margin:'25px auto'}}
    src={song?.artist.image_cover}
    alt=""
  className="rounded-full  object-cover img_slid"
  />
 <p className="mt-4 font-semibold  text-white">{song?.artist.Nom}</p>

<p className="text-gray-500 text-[.9rem]">Artist</p></div>


     
      </Link>

    </SwiperSlide>
  ))
}


</Swiper>

</div>

  </div>
     

  <div className="max-custom-lg:hidden custom-lg:top-20 custom-lg:absolute xl:ml-[-1rem] ml-0 mb-6 flex-1 xl:max-w-[360px] max-w-full flex flex-col custom-lg:overflow-y-scroll custom-lg:h-[100vh] custom-lg:overflow-x-hidden"  >
    




   <div className="w-full flex flex-col custom-lg:mt-0 mt-20 max-custom-lg:mt-[1rem]">
    <div className="flex flex-row justify-between items-center">

      <h2 className="text-white font-bold text-2xl">Top Charts</h2>
      <Link to="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
      </Link>

    </div>

    <div className="mt-4 flex flex-col gap-1">

      {
      topPlays?.map((song,i)=>(
        <TopChartCard
        key={song._id}
         song={song} 
         i={i}
         isPlaying={isPlaying}
         activeSong={activeSong}
         handlePauseClick={handlePauseClick}
         handlePlayClick={()=> handlePlayClick(song,i)}
        />
        
      ))
      }

    </div>

   </div>
   
   <div className="w-full flex flex-col mt-8 custom-lg:mb-20 max-custom-lg:mb-[-7rem]">

 

   <div className="flex flex-row justify-between items-center">

<h2 className="text-white font-bold text-2xl">Top Artists</h2>
<Link to="/top-artists">
  <p className="text-gray-300 text-base cursor-pointer">See more</p>
</Link>
 
</div>


<Swiper 
slidesPerView="auto"
spaceBetween={15}
freeMode
centeredSlides
centeredSlidesBounds
modules={[FreeMode]}
className="mt-4 absolute w_slid"
>
{
  topPlays?.map((song,i)=>(
    <SwiperSlide
     key={song?._id}
     style={{width:'45%', marginBottom:'0px !important', height:'auto'}}
     className="rounded-full animate-slideright"
     >

      <Link to={`/artists/`} >
       
      <div className="relative p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer w-full" style={{overflow: 'hidden !important' }}>
 


 <div className="custom-jj:ml-5 img_slid items-center">
  <img style={{margin:'25px!important',height:'90%', width:'90%' }}
    src={song?.artist.image_cover}
    alt=""
  className="rounded-full  object-cover"
  />

</div>
 <p className="mt-4 font-semibold  text-white">{song?.artist.Nom}</p>

<p className="text-gray-500 text-[.9rem]">Artist</p></div>


     
      </Link>

    </SwiperSlide>
  ))
}


</Swiper>

</div>

  </div>
     
  </>
)



};



export default TopPlay;

