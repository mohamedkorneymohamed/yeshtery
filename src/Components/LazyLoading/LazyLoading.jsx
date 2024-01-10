import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
import { Shimmer } from "react-shimmer";

export default function LazyLoading() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="product-details my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={2500}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
                <SwiperSlide>
                  <Shimmer width={100} height={75} />
                </SwiperSlide>
              </Swiper>
             
            </div>
            {/* <div className="col-md-6">
              <div className="category-img">
                <img src={productDetails?.category.image} width={70} alt="" />
                <h3>{productDetails?.description}</h3>
                <span>
                  {productDetails?.ratingsAverage}
                  <span className="star-rat">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                </span>
                <div className="price">{productDetails?.price} EGP</div>
                <h5>more Details:</h5>
                <span>
                  {productDetails?.description.split(" ").slice(1, 3).join(" ")}
                </span>
                <div className="img-cover">
                  <img src={productDetails?.imageCover} width={70} alt="" />
                </div>
                <div className="quantity">
                  <h5>Quantity:</h5>
                  <div className="quantity-operation ">
                    <div className="increment">
                      <span
                        className="mark-operation"
                        onClick={() =>
                          updateCount(
                            productDetails?.id,
                            getCartItemQuantity(
                              cartDetails,
                              productDetails?.id
                            ) + 1
                          )
                        }
                      >
                        +
                      </span>
                    </div>
                    <div className="count">
                      {getCartItemQuantity(cartDetails, productDetails?.id)}
                    </div>
                    <div className="decrement ">
                      {getCartItemQuantity(cartDetails, productDetails?.id) >
                      0 ? (
                        <button
                          className="btn mark-operation "
                          onClick={() =>
                            updateCount(
                              productDetails?.id,
                              getCartItemQuantity(
                                cartDetails,
                                productDetails?.id
                              ) - 1
                            )
                          }
                        >
                          -
                        </button>
                      ) : (
                        <button className="btn mark-operation " disabled>
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cart pt-3">
                  <div className="add-to-cart ">
                    <button
                      className="cart-btn"
                      onClick={() => addProductToCart(productDetails.id)}
                    >
                      add to cart
                    </button>
                  </div>
                  <span className="wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span className="share">
                    <i className="fa-solid fa-share-nodes"></i>{" "}
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
