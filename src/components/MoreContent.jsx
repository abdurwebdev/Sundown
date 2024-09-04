import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const MoreContent = () => {
  return (
    <div className='w-full h-[50vh]'>
      <Swiper className='swiper'
        spaceBetween={50}
        slidesPerView={4}
      >
        <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MoreContent