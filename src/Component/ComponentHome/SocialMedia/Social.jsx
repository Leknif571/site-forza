import React from 'react'
import IconInsta from '../../../assets/images/social_logo/instag.png';
import IconSnap from '../../../assets/images/social_logo/Snapchat.png';
import IconTikTok from '../../../assets/images/social_logo/tiktok.webp';
import IconYtb from '../../../assets/images/social_logo/Youtube_logo.png';

const Social = () => {
  return (
                    <div class="mt-1 z-10 flex rounded text-sm justify-center items-center">
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.tiktok.com/@f1rza.official" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="tiktok" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconTikTok} className='radius-social-logo'/>
                        </a>
                      </span>
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.instagram.com/f1rza.official/" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="insta" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconInsta} className='radius-social-logo'/>
                        </a>
                      </span>
                      <span class="relative sm:mr-4 flex flex-col justify-center">
                        <a href="https://www.snapchat.com/add/f1rza.off?locale=fr-FR" target="_blank" class="inline-block rounded-full px-1 py-1 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                          <img alt="snap" fetchpriority="low" loading="lazy" decoding="async" data-nimg="1" src={IconSnap} className='radius-social-logo'/>
                        </a>
                      </span>
                  </div>
  )
}

export default Social