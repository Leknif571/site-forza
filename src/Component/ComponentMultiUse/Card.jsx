import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './card.css'

const CardVoiture = ({arrayElementCar}) => {


  return (
    <div className='bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-700 hover:border-red-200 hover:bg-gray-800'>
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
                  <img src={arrayElementCar.img[index].original} alt="" className='h-56' style={{width:'100%'}} />
                </SwiperSlide>
                )

             })}             
          </Swiper>
        </div>
            <div className='pl-2 pt-2 pb-2'>
                    <span className='text-light'>{arrayElementCar.marque}</span>
                    <h1 className='text-2xl md:text-xl line-clamp-1'>{arrayElementCar.title.charAt(0).toUpperCase() + arrayElementCar.title.slice(1)}</h1> 
                    
                    <div className='flex flex-row relative justify-between'>
                      <div>
                        <h2 className='font-titlef text-3md md:text-3sm text-gray-200'>
                          {arrayElementCar.kilometers} KM               
                          <span className='text-red-600 text-lg'> | </span>
                          {arrayElementCar.date}
                        </h2> 
                        <h2 className='font-titlef'>
                          {arrayElementCar.energie}
                        </h2>
                      </div>
                          
                      <div className='prix-voiture flex absolute right-0.5 top-3.5'>
                        <p className="rajdhani-regular text-gray-300 text-3xl md:text-2.5xl lg:mr-2">{arrayElementCar.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                      </div>
                    </div>
          </div>
        </a>
      </div>

  )
}

export default CardVoiture