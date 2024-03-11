import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/Slider.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("../img/Sliderimage/10a669503eed0dae32d8ccc2b748835e.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/Sliderimage/41-111.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/Sliderimage/64f0314da2a2f9fec69a4cbb9476db6a.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../img/Sliderimage/a61a3ed37a5ba3ea1ae7fe9b9847b63d.jpg")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
