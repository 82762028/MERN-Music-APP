import React from 'react';
import { useSelector } from 'react-redux';
import {Error, Loader,ArtistCard} from '../components'
import {  useGetTopChartsQuery } from '../redux/services/ApiToRecupere';
import { useRef,useEffect } from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import { FreeMode } from "swiper";
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination,Autoplay} from 'swiper';
import {Link} from 'react-router-dom'
import {IoIosArrowRoundBack} from 'react-icons/io'
import {IoIosArrowRoundForward} from 'react-icons/io'

import {useState} from 'react'
import Footer from '../components/Footer';
const TopArtists = () => {
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult,setTotalResult]= useState(12);
    const {activeSong, isPlaying} = useSelector((state)=> state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
   
    const divRef = useRef(null); // Initialisez divRef ici
    const pageRef = useRef(null);
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

      // Assurez-vous d'avoir déjà récupéré les données dans 'data'


    // Triez les données en fonction du nombre de followers (en supposant que le nombre de followers est dans data.artist.Followers)
    let sortedData
    if (data) {
        // Obtenez un tableau de paires [indice, taille_des_followers]
        const followersSizes = data.map((item, index) => ({
          index,
          followersSize: item.artist.Followers.length,
        }))
      
        // Triez le tableau de paires par la taille des followers
        followersSizes.sort((a, b) => b.followersSize - a.followersSize)
      
        // Obtenez l'ordre des indices triés
        const sortedIndices = followersSizes.map((pair) => pair.index)
      
        // Créez un nouveau tableau trié en fonction de l'ordre des indices triés
        sortedData = sortedIndices.map((index) => data[index])
      
        // Maintenant, 'sortedData' est le tableau 'data' trié par ordre croissant de la taille des followers
        console.log(sortedData);
      }
      const uniqueArtists = new Set();

        sortedData = sortedData?.filter((track) => {
        const isUnique = !uniqueArtists.has(track.artist.Nom);
        if (isUnique) {
          uniqueArtists.add(track.artist.Nom);
        }
        return isUnique;
      });
      const topPlays = sortedData?.slice(0,7)
      sortedData = sortedData?.slice(7);
  

      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const handlePrev = async () => {
        if (currentPage > 1) {
          paginate(currentPage - 1);


          if (pageRef.current) {
            pageRef.current.scrollIntoView({
              top: 0,
              behavior: 'smooth',
            });
          }
        }
     
      };
    
      const handleNext = async () => {
        const totalPages = Math.ceil(sortedData.length / pageSize);
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        

          if (pageRef.current) {
            pageRef.current.scrollIntoView({
              top: 0,
              behavior: 'smooth',
            });
          }
        }
   
      };
    
      // Calculez l'index de début et de fin pour le slice en fonction de currentPage
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = sortedData?.slice(startIndex, endIndex);

   
    return (
        <div className='flex flex-col pt-[3.5rem]'  ref={divRef}>
          <div className='flex flex-row justify-between items-center'>
          <Link to={`/`} >
            <IoIosArrowRoundBack 
             size={55} className='text-gray-300 mt-4 custom-lg:ml-2 cursor-pointer'/>
          </Link>
      <h2 className='font-bold text-2xl text-white text-left mt-2 mb-[-1rem] m-5 custom-lg:mr-[40%]'>Top Artists Moments</h2>
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
       
      <div className="relative p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer w-full" style={{overflow: 'hidden !important',textAlign:'left' }}>
 
  <img style={{margin:'25px auto'}}
    src={song?.artist.image_cover}
    alt=""
  className="rounded-full  object-cover img_slid"
  />
      <p className="mt-4 font-semibold  text-white">{song?.artist.Nom}</p>

      <p className="text-gray-500 text-[.9rem]">Artist</p>

</div>


     
      </Link>

    </SwiperSlide>
  ))
}


</Swiper>

            <h2 ref={pageRef} className='font-bold text-3xl text-white text-left mt-4 mb-10 m-10'>Top Artists Song
            </h2>
            <div  className='flex flex-wrap custom-lg:justify-center justify-center gap-8'>
                {paginatedData?.map((track,i)=>(
                   <ArtistCard
                    key={track._id}
                    track={track}
                   />
                ))}
            </div>

            <div className="mb-20 flex flex-col items-center">
  
      <div className="inline-flex mt-8 xs:mt-0">
        {/* Buttons */}
        <button className="p-5 flex items-center justify-center px-3 h-8 text-lg font-medium text-white bg-black bg-opacity-80 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white m-2" 
        type='button' 
        onClick={handlePrev}
        >
          <svg className="w-5 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
          Précedent
        </button>
        <button className="p-5 m-2 flex items-center justify-center px-3 h-8 text-lg font-medium text-white bg-black bg-opacity-80 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           type='button' 
           onClick={handleNext}
       
          
        >
          Suivant
          <svg className="w-5 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
 <Footer/>
        </div>
    )
}

export default TopArtists;
