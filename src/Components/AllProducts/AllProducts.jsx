// import React, { Component } from "react";

// export default class AllProducts extends Component {
//   render() {
//     return <div>AllProducts</div>;
//   }
// }

import React, { useEffect, useState } from "react";
import { getAllProducts, getProductDetails } from "../../services/dataServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import {
  Pagination,
  Mousewheel,
  Parallax,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";

export default function AllProducts() {
  return (
    <>
      <div className="products">
        <div className="container mb-3">
          <div className="products-title">
            <h3 className="title">Similar Products</h3>
          </div>
          <div className="products-sub-title">
            <span className="sub-title">You may like these products also.</span>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, FreeMode, Navigation, Autoplay]}
          slidesPerView="auto"
          speed={2500}
          spaceBetween={10}
          freeMode={true}
          centeredSlides={true}
          navigation={true}
          loop={true}
          className="product-swiper py-5 "
        >
          <SwiperSlide width={20}>
            <div className="product-img">
              <img src="" height={300} className="w-100" alt="" />
            </div>
            <div className="card-title text-center ">
              <span></span>
            </div>
            <div className="product-content d-flex justify-content-between align-items-center pt-3">
              <div className="price">
                <span> EGP</span>
              </div>
              <div className="category-img">
                <img src="" height={50} width={30} alt="" />
              </div>
            </div>
            <div className="rat text-start">
              <span>
                <span className="star-rat">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </span>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
