import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Parallax } from "swiper/modules";
export default function SoftwarePages({ img, title, subtitle, number }) {
  return (
    <>
      <div className="col-md-6 col-lg-4  software-pages ">
        <div
          className="thumbnail-image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img src={img} className="img-fluid" alt="" />
          <div className="thumbnail-image__layer">
            <span className="btn-view rounded-pill">
              <a href="" className="text-dark">
                View Now
              </a>{" "}
            </span>
          </div>
        </div>
        <div className="demo-title">
          <div className="row  py-3 align-items-center">
            <div className="col-6 ">
              <Link href="" className="d-block fs-6 fw-bold text-dark">
                {title}
              </Link>
              <span className="fs-6">{subtitle}</span>
            </div>
            <div className="col-6 text-end">
              <span className="number-of-page">{number}</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
