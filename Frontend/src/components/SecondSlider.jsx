import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

const SecondSlider = () => {
  return (
    <div className="second_slider">
      <h2>Newly Added Products</h2>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="snd_slider_item"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondSlider;
