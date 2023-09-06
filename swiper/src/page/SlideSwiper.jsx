import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

function SlideSwiper() {
  return (
    <>
    <article>
      <h2>Slide</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className='slide1'>Slide 1</SwiperSlide>
          <SwiperSlide className='slide0'>Slide 2</SwiperSlide>
          <SwiperSlide className='slide1'>Slide 3</SwiperSlide>
          <SwiperSlide className='slide0'>Slide 4</SwiperSlide>
          <SwiperSlide className='slide1'>Slide 5</SwiperSlide>
          <SwiperSlide className='slide0'>Slide 6</SwiperSlide>
          <SwiperSlide className='slide1'>Slide 7</SwiperSlide>
          <SwiperSlide className='slide0'>Slide 8</SwiperSlide>
          <SwiperSlide className='slide1'>Slide 9</SwiperSlide>
      </Swiper>
    </article>
  </>
  )
}

export default SlideSwiper