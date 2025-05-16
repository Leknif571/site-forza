import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './card.css'

const CardVoiture = ({arrayElementCar}) => {

  //get dark mode
  const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false

  return (
    <div className='bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-700 hover:border-red-200 dark:hover:bg-gray-800 hover:bg-gray-300'>
      <a id="RouterNavLink" href={'/detail/'+arrayElementCar.reference}>     
        <div>
            <Swiper
            // spaceBetween={30}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={false}
            navigation={true}
            effect={"fade"}
            className="mySwiper rounded-t-lg"
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
          >
            {arrayElementCar.img.map((img, index) => {
              return (
                <SwiperSlide>
                  <img src={arrayElementCar.img[index].original} alt="" className='h-48 object-cover' style={{width:'100%'}} />
                </SwiperSlide>
                )

             })}             
          </Swiper>
        </div>
            <div className='pl-2 pt-2 pb-2'>
                    <div className='flex flex-row justify-between'>
                      <span className='text-light dark:text-gray-300 text-gray-950'>{arrayElementCar.marque}</span>
                      <div className='pr-3'>
                        <FaRegHeart  color={darkMode ? "white" : "black" } size={15} />
                      </div>
                    </div>
                    <h1 className='text-2xl md:text-xl line-clamp-1 dark:text-gray-300 text-gray-950'>{arrayElementCar.title.charAt(0).toUpperCase() + arrayElementCar.title.slice(1)}</h1> 
                    <h2 className='font-titlef dark:text-gray-300 text-gray-950'>
                        {arrayElementCar.energie}
                    </h2>
                    <div className='flex flex-row relative justify-between'>
                      <div>
                        <p className="rajdhani-regular dark:text-gray-300 text-gray-950 text-lg md:text-lg ">{arrayElementCar.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                      </div>                      
                      <div className='prix-voiture'>
                        <h2 className='font-titlef text-2md md:text-2sm text-gray-900 dark:text-gray-200 mr-2'>
                          {arrayElementCar.kilometers} KM               
                          <span className='text-red-600 text-lg'> | </span>
                          {arrayElementCar.date}
                        </h2> 

                      </div>
                    </div>
          </div>
        </a>
      </div>

  )
}

export default CardVoiture