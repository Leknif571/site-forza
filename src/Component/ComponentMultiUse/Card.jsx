import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './card.css'

const CardVoiture = ({arrayElementCar}) => {

  //get dark mode
  const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false
  const [isLiked, setIsLiked] = React.useState(false);

  // Check if the car is liked
  const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
  const isCarLiked = likedCars.some(car => car.reference === arrayElementCar.reference);
  // Set the initial state of isLiked based on local storage
  React.useEffect(() => {
    setIsLiked(isCarLiked);
  }, [isCarLiked]);

  // put on local storage liked car
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      // Add to local storage
      const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
      likedCars.push(arrayElementCar);
      localStorage.setItem('likedCars', JSON.stringify(likedCars));
    } else {
      // Remove from local storage
      const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
      const updatedLikedCars = likedCars.filter(car => car.reference !== arrayElementCar.reference);
      localStorage.setItem('likedCars', JSON.stringify(updatedLikedCars));
    }
  };

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

                <SwiperSlide>
                  <img src={arrayElementCar.img[0].original} alt="" className='h-32 sm:h-48 object-cover' style={{width:'100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arrayElementCar.img[1].original} alt="" className='h-32 sm:h-48 object-cover' style={{width:'100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arrayElementCar.img[2].original} alt="" className='h-32 sm:h-48 object-cover' style={{width:'100%'}} />
                </SwiperSlide>
          
          </Swiper>
        </div>  
        </a>
            <div className='pl-2 pt-2 pb-2'>
                    <div className='flex flex-row justify-between'>
                      <span className='text-light dark:text-gray-300 text-gray-950'>{arrayElementCar.marque}</span>
                      <div className='pr-3'>
                        {isLiked ? (
                          <FaHeart color="red" size={17} onClick={handleLikeClick} />
                        ) : (
                          <FaRegHeart color={darkMode ? "white" : "black" } size={17} onClick={handleLikeClick} />
                        )}
                      </div>
                    </div>
                  <a id="RouterNavLink" href={'/detail/'+arrayElementCar.reference}>     

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
                  </a>
          </div>
      
      </div>

  )
}

export default CardVoiture