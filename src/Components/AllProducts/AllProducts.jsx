import React, { useEffect, useState } from "react";
import { getAllProducts, getProductDetails  } from "../../services/dataServices";
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

export default function AllProducts({ setProductDetails }) {
  const [allProduct, setAllProduct] = useState(null);
  const productDetails = async (id) => {
   let data =  await getProductDetails(id);
    setProductDetails(data.data);
  };
  const getProducts = async () => {
    const data = await getAllProducts();
    setAllProduct(data.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          // autoplay={{
          //   delay:0,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          className="product-swiper pt-3 "
        >
          {allProduct?.map((product) => (
            <SwiperSlide
              key={product?._id}
              width={20}
              onClick={() => productDetails(product.id)}
            >
              <div className="product-img">
                <img src={product?.imageCover} className="img-fluid" alt="" />
              </div>
              <div className="card-title text-center ">
                <span>{product?.title?.split(" ").slice(1, 3).join(" ")}</span>
              </div>
              <div className="product-content d-flex justify-content-between align-items-center pt-3">
                <div className="price">
                  <span>{product?.price} EGP</span>
                </div>
                <div className="category-img">
                  <img src={product?.imageCover} width={30} alt="" />
                </div>
              </div>
              <div className="rat text-start">
                <span>
                  {product?.ratingsAverage}
                  <span className="star-rat">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
