import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="top_slider">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="sliderHome"
      >
        <SwiperSlide>
          <NavLink className="slider_img">
            <img src="../public/images/banner2.jpg" alt="banner" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="slider_img">
            <img src="../public/images/banner3.jpg" alt="banner" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="slider_img">
            <img src="../public/images/banner4.jpg" alt="banner" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
