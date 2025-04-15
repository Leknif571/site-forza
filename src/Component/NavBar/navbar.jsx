import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link} from "@heroui/react";
import React from 'react';
import Iconforza from '../../assets/images/ForzaLogoR.png';

import './navbar.css';



export default function Navbari() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const togleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [{name:"VOITURE",path:"/", extra : true},{name:"NEWS",path:"/catalogue", extra: false},{name:"ABOUT",path:"#footer", extra: false}, {name:"CONTACT",path:"#footer", extra: false}];

  return (
    <nav className="hidden sticky top-0 z-50 bg-black w-full h-16 md:flex justify-center">
    <div className="py-3 hidden lg:flex mx-2 lg:mx-4 max-w-screen-2xl 2xl:mx-auto">
        <ul className="flex space-x-6 xl:space-x-10 max-lg:space-y-3 list-none">
            {
                menuItems.map((item, index) => (
                  // Liste des éléments de menu, si extra est vrai alors on ajoute une petit icone a coté du titre est on créer un menu déroulant en hover
                  // sinon on affiche juste le titre
                  item.extra ? (
                    <li key={`${item}-${index}`} className="text-gray-200 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl group relative">
                      <Link className="text-gray-200 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl" href={item.path} onClick={togleClick}>
                          {/* Ajout d'une icone en forme de chevrons vers le bas a coté du titre */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {item.name}
                      </Link>
                   <div className="hidden flex flex-col absolute group-hover:block bg-stone-950 text-white p-2 mt-2 z-10 shadow-lg transition-all duration-300 ease-in-out w-max top-6">
                                  <div>
                                      <ul className="text-left">
                                        <li className="cursor-pointer font-titlef text-lg xl:text-xl border-b-1 w-max pb-2">
                                          <div className="h-16 hover:bg-stone-800 hover:rounded-md">
                                            <div className="w-64">
                                                <div className="content-center justify-between flex items-center border-gray-300">
                                                  <a href="/catalogue">
                                                    <div className="p-2">
                                                      <div className="">Véhicule disponible</div>
                                                      <div className="text-sm text-red-600 pr-2">
                                                        Voir nos voitures disponibles
                                                      </div>
                                                    </div>
                                                  </a>
                                                  
                                                  <svg width="22px" height="22px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g>
                                                    <g id="SVGRepo_iconCarrier"> 
                                                      <path d="M19.78 9.44L17.94 4.44C17.8238 4.09604 17.6036 3.79671 17.3097 3.5835C17.0159 3.37029 16.663 3.25374 16.3 3.25H7.7C7.3418 3.2508 6.99248 3.36151 6.6992 3.56716C6.40592 3.77281 6.18281 4.06351 6.06 4.4L4.22 9.4C3.92473 9.54131 3.67473 9.76216 3.49808 10.0377C3.32142 10.3133 3.22512 10.6327 3.22 10.96V15.46C3.21426 15.7525 3.28279 16.0417 3.41921 16.3006C3.55562 16.5594 3.75544 16.7794 4 16.94V17V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H6C6.26522 20 6.51957 19.8946 6.70711 19.7071C6.89464 19.5196 7 19.2652 7 19V17.25H17V19C17 19.2652 17.1054 19.5196 17.2929 19.7071C17.4804 19.8946 17.7348 20 18 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V17C20 17 20 17 20 16.94C20.2351 16.7808 20.4275 16.5661 20.56 16.315C20.6925 16.0639 20.7612 15.784 20.76 15.5V11C20.7567 10.6748 20.6634 10.3569 20.4904 10.0815C20.3174 9.80616 20.0715 9.58411 19.78 9.44ZM19.25 15.5C19.25 15.5663 19.2237 15.6299 19.1768 15.6768C19.1299 15.7237 19.0663 15.75 19 15.75H5C4.93369 15.75 4.87011 15.7237 4.82322 15.6768C4.77634 15.6299 4.75 15.5663 4.75 15.5V11C4.75 10.9337 4.77634 10.8701 4.82322 10.8232C4.87011 10.7763 4.93369 10.75 5 10.75H19C19.0663 10.75 19.1299 10.7763 19.1768 10.8232C19.2237 10.8701 19.25 10.9337 19.25 11V15.5ZM7.47 4.91C7.48797 4.86341 7.51949 4.82327 7.56048 4.79475C7.60147 4.76624 7.65007 4.75065 7.7 4.75H16.3C16.3499 4.75065 16.3985 4.76624 16.4395 4.79475C16.4805 4.82327 16.512 4.86341 16.53 4.91L17.93 8.75H6.07L7.47 4.91Z" fill="#e60000"></path> <path d="M8 14.75C8.82843 14.75 9.5 14.0784 9.5 13.25C9.5 12.4216 8.82843 11.75 8 11.75C7.17157 11.75 6.5 12.4216 6.5 13.25C6.5 14.0784 7.17157 14.75 8 14.75Z" fill="#e60000"></path> 
                                                      <path d="M16 14.75C16.8284 14.75 17.5 14.0784 17.5 13.25C17.5 12.4216 16.8284 11.75 16 11.75C15.1716 11.75 14.5 12.4216 14.5 13.25C14.5 14.0784 15.1716 14.75 16 14.75Z" fill="#e60000"></path> 
                                                    </g>
                                                  </svg>
                                                </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="cursor-pointer font-titlef text-lg xl:text-xl border-b-1 w-max pb-2">
                                          <div className="h-16 hover:bg-stone-800 hover:rounded-md">
                                            <div>
                                                <div className="w-64 content-center justify-between flex items-center border-gray-300">
                                                <a href="/catalogue">
                                                  <div className="p-2">
                                                    <div className="">Véhicules vendus</div>
                                                    <div className="text-sm text-red-600 pr-2">
                                                      Voir nos voitures vendus
                                                    </div>
                                                  </div>
                                                </a>
                                                  
                                                  <svg fill="#e60000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#e60000" stroke-width="0.01">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                      <g id="SVGRepo_iconCarrier"> 
                                                        <title></title> 
                                                        <g id="auction"> 
                                                          <path d="M14.75,18.24A3.45,3.45,0,0,0,11.5,16h-4A3.44,3.44,0,0,0,5,17a3.39,3.39,0,0,0-.77,1.21A3.49,3.49,0,0,0,2,21.5a.5.5,0,0,0,.5.5h14a.5.5,0,0,0,.5-.5A3.51,3.51,0,0,0,14.75,18.24ZM7.5,17h4a2.48,2.48,0,0,1,2,1h-8a1.71,1.71,0,0,1,.2-.27A2.51,2.51,0,0,1,7.5,17ZM3.05,21A2.5,2.5,0,0,1,5.5,19h8A2.5,2.5,0,0,1,16,21Z"></path> <path d="M21.26,13.56l-2.7-2.71a1.49,1.49,0,0,0-2,0L15.21,9.5,16,8.71l.15.14a.48.48,0,0,0,.7,0l1.3-1.29a1.51,1.51,0,0,0,0-2.12L15.56,2.85a1.51,1.51,0,0,0-2.12,0l-1.29,1.3a.48.48,0,0,0,0,.7l.14.15L10,7.29l-.15-.14a.48.48,0,0,0-.7,0L7.85,8.44a1.51,1.51,0,0,0,0,2.12l2.59,2.59a1.52,1.52,0,0,0,2.12,0l1.29-1.3a.48.48,0,0,0,0-.7L13.71,11l.79-.79,1.31,1.3a1.49,1.49,0,0,0,0,2.05l2.71,2.7a2.46,2.46,0,0,0,1.77.74h.17A1.5,1.5,0,0,0,22,15.5v-.17A2.46,2.46,0,0,0,21.26,13.56Zm-7.11-10a.5.5,0,0,1,.7,0l2.59,2.59a.5.5,0,0,1,0,.7l-.94.94L13.21,4.5Zm-2.3,8.88a.5.5,0,0,1-.7,0L8.56,9.85a.5.5,0,0,1,0-.7l.94-.94,3.29,3.29ZM10.71,8,13,5.71,15.29,8,13,10.29ZM21,15.5a.5.5,0,0,1-.5.5h-.17a1.54,1.54,0,0,1-1.07-.44l-2.7-2.71a.5.5,0,0,1,0-.7l.59-.59a.48.48,0,0,1,.7,0l2.71,2.7A1.54,1.54,0,0,1,21,15.33Z"></path> 
                                                        </g>
                                                      </g>
                                                  </svg>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="cursor-pointer font-titlef text-lg xl:text-xl border-b-1 w-max pb-2">
                                <div className="h-16 hover:bg-stone-800 hover:rounded-md">
                                    <div>
                                        <div className="w-64 content-center justify-between flex items-center border-gray-300">
                                            <a href="/sell">
                                              <div className="p-2">
                                                <div className="">Vendre sa voiture</div>
                                                  <div className="text-sm text-red-600 pr-2">
                                                    Vendez votre voiture
                                                  </div>
                                                </div>  
                                              </a>
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
                    <li key={`${item}-${index}`} className="text-gray-200 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl">
                      <Link className="text-gray-200 hover:text-red-700 cursor-pointer font-titlef text-lg xl:text-xl" href={item.path} onClick={togleClick}>
                          {item.name}
                      </Link>
                    </li>
                  )

                ))
            }
        </ul>
    </div>
    </nav>
  // <Navbar
  //     isBordered
  //     isMenuOpen={isMenuOpen}
  //     onMenuOpenChange={setIsMenuOpen}
  //   >

  //     <NavbarContent className="flex gap-4" justify="center">
  //       <NavbarBrand>

  //       </NavbarBrand>
  //     </NavbarContent>

  //     <NavbarContent className="flex" justify="end" >
  //       <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        
  //     </NavbarContent>



  //     <NavbarMenu className="bg-black items-center" >
  //       {menuItems.map((item, index) => (
  //         <NavbarMenuItem key={`${item}-${index}`}>
  //           <Link
  //             className="w-full text-white"
  //             href={item.path}
  //             size="lg"
  //             onClick={togleClick}
  //           >
  //             {item.name}
  //           </Link>
  //         </NavbarMenuItem>
  //       ))}
  //     </NavbarMenu>
  //   </Navbar>
  )
}
