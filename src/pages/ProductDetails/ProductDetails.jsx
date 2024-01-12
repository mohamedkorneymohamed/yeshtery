import React, { Component } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import dataServices, { fetchData } from '../../services/dataServices'
import ss from "../../images/productA(3).jpg";
import dd from "../../images/productA(1).jpg";

class ProductDetails extends Component {



  componentDidMount() {
    // Initialize Swiper
    this.mainSwiper = new Swiper(".main-swiper-container", {
      loop: true,
      autoplay:true,
      className: "mySwiper2"
    });
      
    this.thumbsSwiper = new Swiper(".thumbs-swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
      thumbs: {
        swiper: this.mainSwiper,
      },
      className: "mySwiper",
    });

  }

  render() {
    return (
      <>
        <div className="product-details my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="main-swiper-container swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>
                    <div className="swiper-slide">
                      <img src={ss} alt="" className="w-50" />
                    </div>

                    {/* Add more main slides as needed */}
                  </div>
              
                </div>
                <div className="thumbs-swiper-container swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    <div className="swiper-slide">
                      <img src={dd} alt="" className="w-100" />
                    </div>
                    {/* Add more thumb slides as needed */}
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-content">
                  <img src="" width={70} alt="" />
                  <h3 className="py-4">
                    {/* Add your dynamic content here */}
                  </h3>
                  <span className="rat-number">
                    {/* Add your dynamic content here */}
                  </span>
                  <span className="star-rat">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <div className="price">
                    {/* Add your dynamic content here */} EGP
                  </div>
                  <h5 className="desc">More Details:</h5>
                  <span className="desc-content">
                    {/* Add your dynamic content here */}
                  </span>
                  <div className="img-cover">
                    <img src="" alt="" />
                  </div>
                  <div className="quantity py-3">
                    <h5>Quantity:</h5>
                    <div className="quantity-operation ">
                      <div className="increment">
                        <span className="mark-operation">+</span>
                      </div>
                      <div className="count"></div>
                      <div className="decrement ">
                        <button className="btn mark-operation ">-</button>
                      </div>
                    </div>
                  </div>
                  <div className="cart pt-3">
                    <div className="add-to-cart ">
                      <button className="cart-btn">add to cart</button>
                    </div>
                    <span className="wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </span>
                    <span className="share">
                      <i className="fa-solid fa-share-nodes"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetails;
