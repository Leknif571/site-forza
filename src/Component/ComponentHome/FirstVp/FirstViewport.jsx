import React from 'react'
import './firstviewport.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import ImageFirst from '../../../assets/images/img_pr/img_fr1.png'
import ImageSecond from '../../../assets/images/img_pr/img_fr2.png'
import ImageThird from '../../../assets/images/img_pr/img_fr3.png'
import ImageFourth from '../../../assets/images/img_pr/img_fr4.png'


const FirstViewport = () => {
  return (
    // <div className='bg-viewport-img'>
    <div className="">
          {/* <div> */}
          <Swiper
            // spaceBetween={30}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            className="mySwiper "
            autoplay={{
                delay: 3600,
                disableOnInteraction: false,  
              }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
              <SwiperSlide>
                <img src={ImageFirst} alt="" style={{width:'100%'}} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImageSecond} alt="" style={{width:'100%'}}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImageThird} alt="" style={{width:'100%'}}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImageFourth} alt="" style={{width:'100%'}}/>
              </SwiperSlide>
          </Swiper>
          {/* </div> */}
    </div>

  )
}

export default FirstViewport