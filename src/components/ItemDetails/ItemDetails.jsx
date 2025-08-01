import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let {id , mediaType} = useParams();
    const [itemDetails , setItemDetails] = useState({});

  async function getItemsDetails(id , media_type) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=e3a7656e592d3c3ca6ee2b488863363e`)
    setItemDetails(data);
  }


  useEffect(()=>{
    
    getItemsDetails(id , mediaType)

  }, [])


  return <>
  <div className="row pb-5 mb-4 ">
    <div className="col-md-3">
    {itemDetails.poster_path?<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.poster_path} className='w-100 rounded' alt="" />:        <img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.profile_path} className='w-100' alt="" />}
    </div>
    <div className="col-md-9">
    <h3 className='h6 my-2'>{itemDetails.title} {itemDetails.name}</h3>
    <p className='py-2 text-light fw-light'>{itemDetails.overview}</p>
    {itemDetails.vote_average&&<h6 className='my-4'>Vote Average :<span className="p-2 text-white">{itemDetails.vote_average?.toFixed(1)}</span></h6>}
    {itemDetails.vote_count &&<h6 className='my-4'>Vote count :<span className="p-2 text-white">{itemDetails.vote_count?.toFixed(1)}</span></h6> }
    
    </div>
  </div>
  
  </>
}
