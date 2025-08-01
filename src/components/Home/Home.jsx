import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import { Helmet } from 'react-helmet';

export default function Home(prop) {
  let {getTrending} = prop

  
  const [trendingMovies , setMovies] = useState([]);
  const [trendingPeople , setPeople] = useState([]);
  const [trendingTv , setTv] = useState([]);


  useEffect(()=>{
   getTrending('movie', setMovies);
   getTrending('person', setPeople); 
   getTrending('tv', setTv); 
  },[])
  
    return (
        <>
        <Helmet>
        <meta charSet='utf-8' />
        <title>WeYou</title>
        </Helmet>
        {/* movie comp */}
          <div className="row py-5">
            <div className="col-md-4 d-flex align-items-center">
              <div className="position-relative">
            <div className="brdr my-2">
              <h2 className='h4'>Trending <br/> movies <br/> to watch now</h2>
              <p className='text-light fw-light my-3'>most watched movies by days</p>
            </div>
              </div>


            </div>

            {trendingMovies.length > 0? trendingMovies.map((item , index)=> <MediaItem key = {index} item = {item}/>):<i className='fas fa-spinner fa-spin fa-4x text-light d-flex justify-content-center'></i>}
         </div>
         {/* end movie comp */}

         {/* Tv comp */}
         <div className="row py-5">
           <div className="col-md-4 d-flex align-items-center">
             <div className="position-relative">
               <div className="brdr my-2">
                 <h2 className='h4'>Trending <br/> Tv Shows <br/> to watch now</h2>
                 <p className='text-light fw-light my-3'>most watched movies by days</p>
               </div>
             </div>
 
 
           </div>
 
           {trendingTv.length > 0 ? trendingTv.map((item , index)=> <MediaItem key = {index} item = {item}/>):<i className='fas fa-spinner fa-spin fa-4x text-light d-flex justify-content-center'></i>}
         </div>
         {/* end Tv comp */}

         {/* people comp */}
         <div className="row py-5">
           <div className="col-md-4 d-flex align-items-center">
             <div className="position-relative">
               <div className="brdr my-2">
                 <h2 className='h4'>Trending <br/> people <br/> to watch now</h2>
                 <p className='text-light fw-light my-3'>most watched movies by days</p>
               </div>
             </div>
           </div>
 
           {trendingPeople.length > 0 ? trendingPeople.map((item , index)=> <MediaItem key = {index} item = {item}/>):<i className='fas fa-spinner fa-spin fa-4x text-light d-flex justify-content-center'></i>}
         </div>
         {/* end people comp */}
        </>


  )
}
