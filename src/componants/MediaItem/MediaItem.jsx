import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({item}) {
  return <>
  <div className="col-md-2 mt-2">
  <Link to={`/item details/${item.id}/${item.media_type}`}>
    <div className="movie position-relative">
        <div className='rounded overflow-hidden'>
        {item.poster_path?<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt="" />:        <img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100' alt="" />}
        </div>
        <h3 className='h6 my-2 d-flex flex-column align-items-center justify-item-between'>{item.title} {item.name}</h3>
        {item.vote_average && <div className="vote p-2 text-white rounded position-absolute top-0 end-0">{item.vote_average?.toFixed(1)}</div>}
        
    </div>
  </Link>
  </div>
  </>
}
