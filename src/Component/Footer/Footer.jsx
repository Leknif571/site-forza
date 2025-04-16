import React, { useState } from 'react'
import { Input } from '@heroui/react';
import Iconforza from '../../assets/images/ForzaLogoR.png';
import IconInsta from '../../assets/images/social_logo/instag.png';
import IconSnap from '../../assets/images/social_logo/Snapchat.png';
import IconTikTok from '../../assets/images/social_logo/tiktok.webp';




import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@heroui/react";
import './footer.css'
import { faContactBook } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  let [whichSection, setWhichSection] = useState(0)

  // let tableText = [
  //   {
  //     title: 'Contact',
  //     corps : <div>
  //                 <p>Adresse e-mail : forzalu.com@gmail.com </p> 
  //                  <p>Numéro téléphone : 06 29 90 52 06 <span className='text-red-600 text-2xl'> | </span> 07 67 18 32 15</p>
  //             </div>
  //   },
  //   {
  //     title: 'Mentions légales',
  //     corps : <div>
  //                 <p>Raison social : Forza</p>
  //                 <p>Numéro de siret : XXX XXXX XXXX</p>
  //             </div>
  //   },
  //   {
  //     title: 'Crédit',
  //     corps : <div>Ici tout relatif au crédit</div>
  //   }
  // ]

  return (
        <footer className="bg-[#EFEFEF] dark:bg-[#0F161E] shadow-md text-white p-8" id='footer'>
            <div className="mx-auto w-full p-4 py-6 lg:py-8">
              <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-5 text-center sm:text-left lg:text-left max-w-screen-2xl 2xl:mx-auto">
                  <div class="m-4 sm:col-span-3 md:col-span-2 flex flex-col justify-center lg:text-left mt-12 lg:mt-0">
                    <a class="flex items-center" href="/">
                      <img alt="f1rza" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" class="md:w-[240px] w-48 hidden dark:block" src={Iconforza} style={{color: "transparent;", width:"150px", height:"auto"}}/>
                    </a>
                  <p class="my-2 text-neutral-400 text-left">Notre plateforme est conçue pour les passionnés d'automobile haut de gamme, ceux qui recherchent l'excellence et l'élégance dans chaque détail. Découvrez une sélection de véhicules de prestige soigneusement choisie afin de vous satisfaire.</p>
                  <span className='p-2 font-bold'>Newsletter</span>
                  <div className='relative w-full'>
                    <input type="text" className='h-12 w-full rounded-2xl border border-red-400 p-4 bg-stone-950' placeholder='Entrer votre e-mail' />
                    <button className='rounded-r-2xl border border-red-700 absolute bg-stone-900 top-1 right-1 h-10 w-10'>+</button>
                  </div>
                  
                </div>        
                <div>
                  <h2 class="font-mono mb-6 font-bold uppercase text-md">Plan</h2>
                  <ul class="text-sm list-none">
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="/contact">
                        Nos véhicules
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="">
                        Vends ta voiture
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm">
                          Blog et information
                      </a>
                    </li>
                  </ul>
                </div>        
                <div>
                  <h2 class="font-mono mb-6 font-bold uppercase text-md">A propos</h2>
                  <ul class="text-sm list-none">
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="/contact">
                        A Propos de nous
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="">
                        Condition générale
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm">
                        Mentions légales
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm">
                        Politique de confidentialité
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm">
                        Crédit
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-mono mb-6 font-bold uppercase text-md">Coordonnée</h2>
                  <ul class="text-sm list-none">
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="/contact">
                        Où nous trouver ?
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="mailto:forzalu.com@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                        </svg>
                            forzalu.com@gmail.com 
                      </a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="tel:+33629905206">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"/>
                      </svg>(+33) 6 29 90 52 06</a>
                    </li>
                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="tel:+33767183215">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"/>
                      </svg>(+33) 7 67 18 32 15
                      </a>
                    </li>

                    <li class="mb-4">
                      <a class="flex flex-row justify-center sm:justify-start gap-2 text-neutral-400 hover:underline hover:text-[#dc0000] text-sm" href="https://www.google.com/maps/place/FIRST+MOTORS/@25.1770491,55.2454568,17z/data=!4m6!3m5!1s0x3e5f694dd7853083:0xd2961e5bc8e7cf88!8m2!3d25.1771643!4d55.2477218!15sCgxmMXJzdCBtb3RvcnNaDiIMZjFyc3QgbW90b3JzkgEKY2FyX2RlYWxlcg?shorturl=1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-5 h-5">
                        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
                      </svg>30 rue de l'industrie, Strassen, Luxembourg</a>
                    </li>
                  </ul>
                </div>
               
              </div>
              <hr className="my-4 border-gray-700"/>
              <div class="w-full flex flex-col sm:flex-row justify-between text-neutral-400">
                <p class="text-sm text-center">
                  <span>Copyright © 2025 
                    <a class="font-bold hover:underline hover:text-[#dc0000]" href="/"> F1rza</a>
                    . All Rights Reserved</span>
                    </p>
                    <p class="mt-1 text-sm text-center items-center">
                    <div class="mt-1 z-10 flex rounded text-sm text-center items-center">
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.youtube.com/" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="facebbok" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconTikTok} className='radius-social-logo'/>
                        </a>
                      </span>
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.instagram.com/forza.lu/" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="facebbok" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconInsta} className='radius-social-logo'/>
                        </a>
                      </span>
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.snapchat.com/add/forza.lu?locale=ar-AR" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="facebbok" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconSnap} className='radius-social-logo'/>
                        </a>
                      </span>
                  </div>
                    </p>
              </div>
            </div>
          </footer>

  )
}

export default Footer