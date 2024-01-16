import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productsData from "../../data/products-data.json";
import ProductService from "../../services/dataService";
import AllProducts from "../../Components/AllProducts/AllProducts";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbsSwiper: null,
    };
  }

  componentDidMount() {
    this.props.getProductsDetails("1");

    try {
      // Do something with the cart data if needed
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }

  handleSetThumbsSwiper = (swiper) => {
    this.setState({ thumbsSwiper: swiper });
  };

  render() {
    const { thumbsSwiper } = this.state;
    const { addToCart, products, handleDecrement, handleIncrement, isLoading } =
      this.props;

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
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  speed={2500}
                  className="mySwiper2"
                >
                  {products[0]?.images.map((img, index) => (
                    <SwiperSlide key={index} className="text-center">
                      <img
                        src={require(`../../images/${img}`)}
                        className="w-50"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={this.handleSetThumbsSwiper}
                  navigation={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {products[0]?.images.map((img, index) => (
                    <SwiperSlide key={index} className="text-center">
                      <img
                        src={require(`../../images/${img}`)}
                        className="w-50"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-md-6">
                <div className="category-content">
                  <>
                    {products[0] && (
                      <img
                        src={require(`../../images/${products[0].brandImage}`)}
                        width={50}
                        alt=""
                      />
                    )}
                    <h3 className="py-4">{products[0]?.description}</h3>
                    <span className="rat-number">{products[0]?.rat}</span>
                    <div className="price">{products[0]?.price} EGP</div>
                    <span className="desc">Color : {products[0]?.color}</span>
                    <div className="img-cover">
                      {products[0] && (
                        <img
                          src={require(`../../images/${products[0].categoryImage}`)}
                          width={50}
                          alt=""
                        />
                      )}
                    </div>
                    <span className="desc">{products[0]?.size}</span>

                    <div className="quantity py-3">
                      <h5>Quantity:</h5>
                      <div className="quantity-operation ">
                        <div className="increment">
                          {products[0]?.quantity > 0 ? (
                            <button
                              className="mark-operation"
                              onClick={handleIncrement}
                            >
                              <span className="Arithmetic-mark">+</span>
                            </button>
                          ) : (
                            <button className="btn mark-operation" disabled>
                              <span className="Arithmetic-mark">+</span>
                            </button>
                          )}
                        </div>
                        <div className="count">{products[0]?.quantity}</div>
                        <div className="decrement">
                          {products[0]?.quantity > 0 ? (
                            <button
                              className="btn mark-operation"
                              onClick={handleDecrement}
                            >
                              <span className="Arithmetic-mark">-</span>
                            </button>
                          ) : (
                            <button className="btn mark-operation" disabled>
                              <span className="Arithmetic-mark">-</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="cart pt-3">
                      <div
                        className="add-to-cart "
                        onClick={() => addToCart(products[0]?.id)}
                      >
                        {isLoading ? (
                          <button className="cart-btn">
                            {" "}
                            <i className="fas fa-circle-notch fa-spin"></i>
                          </button>
                        ) : (
                          <button className="cart-btn">add to cart</button>
                        )}
                      </div>
                      <span className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </span>
                      <span className="share">
                        <i className="fa-solid fa-share-nodes"></i>{" "}
                      </span>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Details;
