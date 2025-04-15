import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './card.css'

const CardVoiture = ({arrayElementCar}) => {


  return (
    <div className='bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-700'>
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
              {/* <img className='h-48' src={arrayElementCar.img[0].original} alt="" /> */}
        </div>
            <div className='p-2'>
                    <span className='text-light'>{arrayElementCar.marque}</span>
                    <h1 className='text-xl'>{arrayElementCar.title.charAt(0).toUpperCase() + arrayElementCar.title.slice(1)}</h1> 
                    
                    <div className='flex flex-row justify-between'>
                      <h2 className='text-lg text-gray-200'>
                        {arrayElementCar.kilometers} km               
                        <span className='text-red-600 text-lg'> | </span>
                        {arrayElementCar.date}
                      </h2> 
                          
                      <div className='prix-voiture'>
                        <p className="font-titlef text-gray-200 text-2xl lg:mr-2">{arrayElementCar.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</p>
                      </div>

                    </div>
                  </div>
                 
        </a>
      </div>

  )
}

export default CardVoiture