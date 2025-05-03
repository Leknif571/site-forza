import React from 'react'
import { useState } from 'react'
import { Link } from '@heroui/react';
import Iconforza from '../../assets/images/ForzaLogoR.png';

const TitleBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-stone-950">
        <div className="mx-auto max-w-7xl px-2 pt-2">
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
                  <img className="logo-forza" src={Iconforza} alt=""/>
              </Link>
              </div>
            </div>

          </div>
        </div>

        <div className={"h-screen" + (isOpen ? " block" : " hidden")}>
          <div className="space-y-1 px-2 pt-4 pb-3">
            <div className='border-b-1 border-stone-400'>
              <a href="/" className="block  rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white" aria-current="page">HOME</a>
            </div>
            <div className='border-b-1 border-stone-400'>
              <a href="/catalogue" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CARS</a>
            </div>
            <div className='border-b-1 border-stone-400'>
              <a href="/sell" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">SELL YOUR CAR</a>
            </div>
            <div className='border-b-1 border-stone-400'>
              <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ABOUT</a>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-700"/>
      </nav>

        
    


  )
}

export default TitleBar