import React from 'react'
import { useState } from 'react'
import { Link } from '@heroui/react';
import Iconforza from '../../assets/images/ForzaLogoR.png';
import IconForzaN from '../../assets/images/ForzaLogoB.png';
import Social from '../ComponentHome/SocialMedia/Social';

import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const TitleBar = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-stone-200 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Ouverture menu principal</span>
                <div className={(isOpen ? "hidden" : "") }>
                  <svg className={"size-6" } fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>

                <div className={(isOpen ? "" : "hidden")}>
                  <svg className={"size-6"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>

              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex shrink-0 items-center">
              <Link href="/" className="">
                  <img className="logo-forza" src={darkMode ? Iconforza : IconForzaN} alt=""/>
              </Link>
              </div>
            </div>

          </div>
        </div>

        <div className={"flex flex-col justify-evenly h-screen" + (isOpen ? " block" : " hidden")}>
              <div className="space-y-1 px-2 pt-2">
                <div className='border-b-1 border-stone-400'>
                  <a href="/" className="block  rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600" aria-current="page">HOME</a>
                </div>
                <div className='border-b-1 border-stone-400'>
                  <a href="/catalogue/available" className="block rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600">AVAILABLE CARS</a>
                </div>
                <div className='border-b-1 border-stone-400'>
                  <a href="/catalogue/sell" className="block rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600">SOLD CARS</a>
                </div>
                <div className='border-b-1 border-stone-400'>
                  <a href="/catalogue/featured" className="block rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600">FEATURED STOCK</a>
                </div>
                <div className='border-b-1 border-stone-400'>
                  <a href="/sell" className="block rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600">SELL YOUR CAR</a>
                </div>
                <div className='border-b-1 border-stone-400'>
                  <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium dark:text-gray-300 hover:dark:text-white text-gray-950 hover:text-red-600">ABOUT</a>
                </div>
              </div>
              <div className='w-screen flex flex-row justify-around'>

              
              {darkMode ? 
              <a className='bg-white text-center text-black rounded-md p-3 m-2' onClick={() => setDarkMode()}>
                <div className="flex flex-row justify-between">               
                    <span>
                      Thème clair
                    </span>
                  <span className="pl-2 flex items-center">
                    <IoIosSunny size={20}  />   
                  </span>
                </div>
              </a> :
              <a className='bg-black text-center text-white rounded-md p-3 m-2' onClick={() => setDarkMode()}>
                <div className="flex flex-row justify-between ">               
                 
                    <span>
                      Thème sombre
                    </span>
                  <span className="pl-2 flex items-center">
                    <IoMoon size={20} />
                  </span>
                </div>  
              </a>
             

              }
              <a href="/liking-page" className='bg-red-800 text-center text-white rounded-md p-3 m-2'>
                <div className="flex flex-row justify-between">               
                    <span>
                      Mes favoris
                    </span>
                  <span className="pl-2 flex items-center">
                    <FaRegHeart size={20}  />   
                  </span>
                </div>
              </a>
              </div>
              <Social/>
              
             
        </div>
        <hr className="border-gray-600"/>
      </nav>

        
    


  )
}

export default TitleBar