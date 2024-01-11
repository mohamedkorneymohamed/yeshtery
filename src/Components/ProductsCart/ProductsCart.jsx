// import React, { Component } from "react";

// export default class ProductsCart extends Component {
//   render() {
//     return <div>ProductsCart</div>;
//   }
// }

import React, { useEffect, useState } from "react";
import close from "../../images/close.svg";

export default function ProductsCart() {
  return (
    <>
      <div className="products-cart ">
        <div className="row">
          <div className="col-md-8 col-3 "></div>
          <div className="col-md-4 col-9 px-0">
            <div className="cart p-4">
              <div className="close-img text-end">
                <img src={close} alt="" />
              </div>
              <div className="cart-title text-center">
                <h3>My Cart</h3>
              </div>
              <div className="cart-sub-title">
                <span>Cart Summary</span>
              </div>
              <div className="product-container">
                <div className="product-info">
                  <div className="product-img">
                    <img src="" className="w-25"></img>
                  </div>
                  <div className="product-title">
                    <span></span>
                  </div>
                </div>
                <div className="count ">
                  <span>Quantity:</span>
                </div>
                <div className="price ">
                  <span>Price:</span>
                </div>
                <div className="remove-from-cart mt-2 text-end ">
                  <button className="remove-btn">remove</button>
                </div>
              </div>
              <div className="total-price">
                <span>Total Price :</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
