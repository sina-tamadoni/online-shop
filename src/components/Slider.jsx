import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cover01 from "../assets/image01.webp";
import cover02 from "../assets/image02.webp";
import cover03 from "../assets/image03.webp";
import cover04 from "../assets/image04.webp";
import cover05 from "../assets/image05.webp";
import cover06 from "../assets/image06.webp";
import cover07 from "../assets/image07.webp";
import cover08 from "../assets/image08.webp";

import gif01 from "../assets/gif01.gif";
import { Link } from "react-router-dom";

function Slider() {
  //   const progressCircle = useRef(null);
  //   const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/coocking">
            <img src={gif01} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover01} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover02} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover03} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover04} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover05} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover06} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover07} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cover08} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
