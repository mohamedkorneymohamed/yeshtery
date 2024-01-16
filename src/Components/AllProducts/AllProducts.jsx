import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import productsData from "../../data/products-data.json";
import {
  Pagination,
  Mousewheel,
  Parallax,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import productsDatw from "../../data/products-data.json";

class AllProducts extends Component {
  // ... your existing code
  // componentDidMount() {
  //   try {
  //     this.mainSwiper = new Swiper(".main-swiper-container", {
  //       loop: true,
  //       className: "mySwiper2 ",
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  productDetails(productId) {
   let newProducts = [...productsDatw.products];
    newProducts = newProducts.filter((product) => product.id !== productId);
    this.setState({ products: newProducts });
    console.log(productsDatw);
  }
  render() {
    return (
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
          {productsData?.products.map((product) => (
            <SwiperSlide
              key={product?.id}
              width={20}
              onClick={() => this.productDetails(product.id)}
            >
              <div className="product-img">
                <img
                  src={require("../../images/" + product?.coverImage)}
                  width={20}
                  className="w-100"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default AllProducts;
