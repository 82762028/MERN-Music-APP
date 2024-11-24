import {Error, Loader, SongCard} from '../components'
import {TopPlay} from '../components'
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/ApiToRecupere';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import  {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination,Autoplay} from 'swiper';
import Footer from '../components/Footer';

const Discover = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResult,setTotalResult]= useState(45);
    const {activeSong, isPlaying,genreListId } = useSelector((state)=> state.player);
    const {data, isFetching, error}= useGetTopChartsQuery()
    const divRef = useRef(null); // Initialisez divRef ici
    const pageRef = useRef(null);

    useEffect(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({
          top:-10,
          
          behavior: 'smooth',
        });
      }
    }, [data]);
    
    if(isFetching) return <Loader title="Loading songs ..." />;
    if(error) return <Error/>;
    const genreTitle = data?.find((value) => value.categorie === genreListId)?.categorie;
 
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
      const totalPages = Math.ceil(data.length / pageSize);
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
    const paginatedData = data?.slice(startIndex, endIndex);
   

    return (

      <>  
    
    <div ref={divRef} className='flex flex-col w-full pt-[0rem] custom-lg:pt-[2.7rem]'>
    <div className=" custom-lg:hidden custom-lg:sticky relative top-0 h-fit custom-lg:w-[350px] custom-lg:ml-0">
      <TopPlay />
    </div>
<div   className='max-custom-lg:hidden items-center custom-lg:gap-2  px-1  w_slide mt-5'>
   
        <Swiper       slidesPerView={1} spaceBetween={20}
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
 <SwiperSlide >

 
<div className=' mt-8 min-h-[70vh] home-div bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl'  style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/back.jpg)'
}}>
  <div className='md:text-left text-center my-10'>
    <h2 className='h2-slide md:leading-normal leading-10 text-white font-bold'>
      <span className='text-orange-600 span-slide'>
      
      Bienvenue !! <br />
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

 
<div className=' mt-8 min-h-[70vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl'
 style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/1arya.jpg)'
}}
>
  <div className='md:text-left text-center my-10'>
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

 
<div className=' mt-8 min-h-[70vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl'
style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/1cardi.jpg)'
}}
>
  <div className='md:text-left text-center my-10'>
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

 
<div className=' mt-8 min-h-[70vh] home-div  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-l-[2rem] cursor-pointer mx-2 shadow-2xl'
style={{
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(rgb(42 41 41 / 60%), rgb(0 0 0 / 80%)), url(src/assets/nikki3.jpg)'
}}
>
  <div className='md:text-left text-center my-10'>
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





          
            <div ref={pageRef} className='flex justify-center items-center sm:flex-row flex-col mt-4 mb-10'>
              
         
                <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
  

                </div>
                    <div className='flex flex-wrap custom-lg:justify-center justify-center gap-8'>

                        {paginatedData?.map((song,i)=>
                        (
                  <SongCard 
                  key={song._id} 
                  song={song}
                  isPlaying={isPlaying}  
                  activeSong = {activeSong}
                  data = {data}
                  i={i} />
                        ))}
                  
                    </div>

 
                    <div className="flex flex-col items-center">
  
  <div className="inline-flex mt-8 xs:mt-0 mb-20">
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
</div>
    
    <Footer/>
    </>
       
    )
}

export default Discover;
