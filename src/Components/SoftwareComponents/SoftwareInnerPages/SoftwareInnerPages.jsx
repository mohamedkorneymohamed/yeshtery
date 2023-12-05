import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Parallax, Autoplay } from "swiper/modules";
import one from "../../../assets/image/1.jpg";
import two from "../../../assets/image/2.jpg";
import three from "../../../assets/image/3.jpg";
import four from "../../../assets/image/4.jpg";
import five from "../../../assets/image/5.jpg";
export default function SoftwareInnerPages() {
  return (
    <>
      <div className="carousel">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView="auto"
          speed={3000}
          spaceBetween={10}
          className="mySwiper my-5"
        >
          <SwiperSlide>
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          loop={true}
          modules={[Pagination, Mousewheel, Parallax, Autoplay]}
          autoplay={{
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          spaceBetween={10}
          speed="3000"
          className="mySwiper my-5"
        >
          <SwiperSlide>
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={two} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
