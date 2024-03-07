import React from 'react'
import './firstviewport.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const FirstViewport = () => {
  return (
    <div className='bg-viewport-img'>
        <div className="flex flex-col justify-end pb-40 md:pb-48 h-screen">
          <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center">
            <HashLink smooth to="/#footer">
              <div className='flex flex-col justify-center m-4 md:mr-4 specific-button'><span className='text-xl font-titlef font-bold text-white'>Nous contacter</span></div>
            </HashLink>
            <Link to='/catalogue'>     
              <div className='flex flex-col justify-center m-4 md:ml-4 specific-button'><span className='text-xl font-titlef font-bold text-white'>Notre catalogue</span></div>
            </Link>

          </div> 
        </div>
    </div>

  )
}

export default FirstViewport