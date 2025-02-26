'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';
import { Slide_one } from './Slide_one';
import { Slide_two } from './SLide_two';

export const Home_slider =() =>{
  return (
    <>
      <Swiper
        direction={'vertical'}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Slide_one/></SwiperSlide>
        <SwiperSlide><Slide_two/></SwiperSlide>
      </Swiper>
    </>
  );
}
