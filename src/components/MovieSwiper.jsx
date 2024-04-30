import React from 'react'
import './movieSwiper.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwiper({ slides ,slideChange }) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className='movieSwiper'
    >
      {slides.map((slide) => (
       <SwiperSlide key={slide._id}>
       <img src={slide.previewImg} alt={`Preview of ${slide.title}`} onClick={()=>slideChange(slide._id)} style={{ width: '100%', height: '100%' }} />
     </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;