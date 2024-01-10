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
import {
  getProductDetails,
  addToCart,
  sendLoginData,
  getLoggedUserCart,
  updateProductCount,
} from "../../services/dataServices";
import AllProducts from "../../Components/AllProducts/AllProducts";
import ProductsCart from "../../Components/ProductsCart/ProductsCart";
import { Shimmer } from "react-shimmer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export default function ProductDetails({
  addProductToCart,
  userCart,
  cartDetails,
  setCartDetails,
  setCartNumber,
  sidebarAnimation,
  setSidebarAnimation,
}) {
  const [isLoading, setIsLoading] = useState(false);
  // THIS FUNCTION IN TASK
  function getCartItemQuantity(cartDetails, productId) {
    const productInCart = cartDetails?.products?.find(
      (product) => product.product._id === productId
    );
    return productInCart ? productInCart.count : 0;
  }

  const updateCount = async (productId, count) => {
    const response = await updateProductCount(productId, count);
    setCartDetails(response?.data?.data);
  };

  // -----------------------------------NOT REQUIRED IN TAST
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  // -----------------------------------NOT REQUIRED IN TAST

  const fetchData = async () => {
    const data = await getProductDetails("6428e997dc1175abc65ca0a1");
    setProductDetails(data?.data);
  };
  // -----------------------------------NOT REQUIRED IN TAST

  const dataServices = async () => {
    setIsLoading(true);

    await sendLoginData({
      email: "mohamed223@gmail.com",
      password: "Mohamed@123",
    });
    await fetchData();
    await userCart();
    setIsLoading(false);
  };
  // -----------------------------------NOT REQUIRED IN TAST

  useEffect(() => {
    dataServices();
  }, []);
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
                {isLoading ? (
                  <SwiperSlide>
                    <Shimmer className="shimmer" />
                  </SwiperSlide>
                ) : (
                  <>
                    {productDetails?.images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img} className="w-50" />
                      </SwiperSlide>
                    ))}
                  </>
                )}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                navigation={true}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {isLoading ? (
                  <>
                    <SwiperSlide>
                      <Shimmer width={100} height={100} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Shimmer width={100} height={100} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Shimmer width={100} height={100} />
                    </SwiperSlide>
                  </>
                ) : (
                  <>
                    {productDetails?.images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img} className="w-75" />
                      </SwiperSlide>
                    ))}
                  </>
                )}
              </Swiper>
            </div>
            <div className="col-md-6">
              <div className="category-content">
                {isLoading ? (
                  <>
                    <Shimmer width={100} height={100} />
                    <Shimmer width={400} height={10} className="my-2" />
                    <Shimmer width={200} height={10} className="my-2" />
                    <Shimmer width={200} height={10} className="my-2" />
                    <Shimmer width={200} height={10} className="my-2" />
                    <Shimmer width={200} height={10} className="my-2" />
                    <Shimmer width={350} height={10} className="my-2" />
                    <Shimmer width={100} height={100} className="my-2" />
                    <Shimmer width={100} height={10} className="my-2" />
                    <Shimmer width={130} height={10} className="my-2" />
                    <Shimmer width={200} height={10} className="my-2" />
                  </>
                ) : (
                  <>
                    <img
                      src={productDetails?.category.image}
                      width={70}
                      alt=""
                    />
                    <h3>{productDetails?.description}</h3>
                    <span className="rat-number">
                      {productDetails?.ratingsAverage}
                    </span>
                    <span className="star-rat">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </span>
                    <div className="price">{productDetails?.price} EGP</div>
                    <h5 className="desc">More Details:</h5>
                    <span className="desc-content">
                      {productDetails?.description
                        .split(" ")
                        .slice(1, 3)
                        .join(" ")}
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
                          {getCartItemQuantity(
                            cartDetails,
                            productDetails?.id
                          ) > 0 ? (
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllProducts
        setProductDetails={setProductDetails}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <ProductsCart
        cartDetails={cartDetails}
        setCartDetails={setCartDetails}
        setCartNumber={setCartNumber}
        sidebarAnimation={sidebarAnimation}
        setSidebarAnimation={setSidebarAnimation}
        userCart={userCart}
      />
    </>
  );
}
