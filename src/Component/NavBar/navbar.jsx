import {Link} from "@heroui/react";
import { IoIosSunny } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { RiAuctionFill } from "react-icons/ri";



import React from 'react';

import './navbar.css';



export default function Navbari({darkMode, setDarkMode}) {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const togleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [{name:"CARS",path:"/", extra : true},{name:"NEWS",path:"/catalogue", extra: false},{name:"ABOUT",path:"#footer", extra: false}, {name:"CONTACT",path:"#footer", extra: false}];

  return (
    <nav className="hidden sticky top-0 z-50 bg-stone-200 dark:bg-stone-950 w-full h-16 md:flex justify-around">
    <div>
      <span></span>
    </div>
    <div className="py-5 hidden md:flex md:mx-4 2xl:mx-auto">
        <ul className="flex space-x-6 xl:space-x-10 max-lg:space-y-3 list-none">
            {
                menuItems.map((item, index) => (
                  // Liste des éléments de menu, si extra est vrai alors on ajoute une petit icone a coté du titre est on créer un menu déroulant en hover
                  // sinon on affiche juste le titre
                  item.extra ? (
                    <li key={`${item}-${index}`} className="dark:text-gray-200 text-gray-950 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl group/first relative">
                      <Link className="dark:text-gray-200 text-gray-950 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl" href={item.path} onClick={togleClick}>
                          {/* Ajout d'une icone en forme de chevrons vers le bas a coté du titre */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {item.name}
                      </Link>
                   <div className="hidden flex flex-col absolute group-hover/first:block bg-stone-100 dark:bg-stone-950 text-black dark:text-white p-2 mt-1 z-10 shadow-lg transition-all duration-300 ease-in-out w-max top-6">
                                  <div>
                                      <ul className="text-left">
                                        <li className="cursor-pointer font-titlef relative group/second text-lg xl:text-xl border-b-1 dark:border-white border-gray-800 w-max pb-2">
                                          <div className="h-16 hover:bg-stone:200 dark:hover:bg-stone-800 hover:rounded-md">
                                            <div className="w-64">
                                                <div className="content-center justify-between flex items-center border-gray-900 dark:border-gray-300">
                                                  <a href="/catalogue/available">
                                                    <div className="p-2">
                                                      <div className="">Inventory</div>
                                                      <div className="text-sm text-red-600 pr-2">
                                                        Voir toutes nos voitures
                                                      </div>
                                                    </div>
                                                  </a>
                                                  
                                                  <IoCarSport color="red"/>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute left-full top-0 hidden group-hover/second:block dark:bg-stone-950 bg-stone-100 text-black dark:text-white w-64 p-4 shadow-lg z-20">
                                            <ul>
                                              <li className="hover:bg-stone:200 dark:hover:bg-stone-700 p-2 border-b-1 dark:border-white border-gray-800">
                                                <a href="/catalogue/available">
                                                  Available cars
                                                </a>
                                              </li>
                                              <li className="hover:bg-stone:200 dark:hover:bg-stone-700 p-2 ">
                                                <a href="/catalogue/sell">
                                                  Sold cars
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </li>
                                        
                                        <li className="cursor-pointer font-titlef text-lg xl:text-xl border-b-1 dark:border-white border-gray-800 w-max pb-2">
                                          <div className="h-16 hover:bg-stone:200 dark:hover:bg-stone-800 hover:rounded-md">
                                            <div>
                                                <div className="w-64 content-center justify-between flex items-center border-gray-900 dark:border-gray-300">
                                                <a href="/catalogue/featured">
                                                  <div className="p-2">
                                                    <div className="">Featured stock</div>
                                                    <div className="text-sm text-red-600 pr-2">
                                                      Voir nos prochaines voitures
                                                    </div>
                                                  </div>
                                                </a>
                                                  
                                            <GiSandsOfTime color="red"/>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="cursor-pointer font-titlef text-lg xl:text-xl border-b-1 dark:border-white border-gray-800 w-max pb-2">
                                <div className="h-16 hover:bg-stone:200 dark:hover:bg-stone-800 hover:rounded-md">
                                    <div>
                                        <div className="w-64 content-center justify-between flex items-center border-gray-900 dark:border-gray-300">
                                            <a href="/sell">
                                              <div className="p-2">
                                                <div className="">Vendre sa voiture</div>
                                                  <div className="text-sm text-red-600 pr-2">
                                                    Vendez votre voiture
                                                  </div>
                                                </div>  
                                              </a>
                                              <RiAuctionFill color="red"/>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                  ) : ( 
                    // Si extra est faux alors on affiche juste le titre  
                    <li key={`${item}-${index}`} className="">
                      <Link className="dark:text-gray-200 text-gray-900 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl" href={item.path} onClick={togleClick}>
                          {item.name}
                      </Link>
                    </li>
                  )

                ))
            }
        </ul>

    </div>
    <div className="flex flex-row">
      <div className="py-5 hidden md:flex md:mx-4 2xl:mx-auto cursor-pointer">
          <a onClick={() => setDarkMode()}>
            <IoIosSunny color={darkMode ? "white" : "black" } size={20}/>
          </a>
      </div>
      <div className="py-5 hidden md:flex md:ml-4 px-6 2xl:mx-auto">
        <a href="">
            <FaRegHeart  color={darkMode ? "white" : "black" } size={20} />
        </a>
      </div>
    </div>
    </nav>
 
  )
}
