import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <div className="my-nav container mt-2 mb-3  d-flex flex-column align-items-center justify-content-center">
        <h1 className="fw-bold my-2 pe-3">Noxe</h1>

        <ul className='list-unstyled m-0 d-flex'>
          <li className='px-2 mx-3'><Link className='text-info' to= "/">Home</Link></li>
          <li className='px-2 mx-3'><Link className='text-info' to= "/movies">Movies</Link></li>
          <li className='px-2 mx-3'><Link className='text-info' to= "/tv">Tv</Link></li>
          <li className='px-2 mx-3'><Link className='text-info' to= "/people">people</Link></li>
        </ul>
      </div>
    </>
  )
}
