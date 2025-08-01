import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from 'react-helmet';


export default function People(prop) {
  let {getTrending} = prop
  
  const [trendingPeople , setPeople] = useState([]);
  useEffect(()=>{
    getTrending('person', setPeople); 
   },[])
  return <>
  <Helmet>
  <meta charSet='utf-8' />
  <title>People</title>
  </Helmet>
  
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

  
  </>
}
