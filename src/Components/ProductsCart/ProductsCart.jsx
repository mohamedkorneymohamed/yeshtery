import React, { useEffect, useState } from "react";
import close from "../../images/close.svg";
import { deleteCartDetails } from "../../services/dataServices";

export default function ProductsCart({
  cartDetails,
  setCartDetails,
  setCartNumber,
  sidebarAnimation,
  setSidebarAnimation,
  userCart,
}) {
  async function deleteProduct(productId) {
    let response = await deleteCartDetails(productId);
    setCartDetails(response.data.data);
    setCartNumber(response.data.numOfCartItems);
  }

  useEffect(() => {
    userCart()
    // Call changeStyleBody when sidebarAnimation changes
    changeStyleBody();
  }, [sidebarAnimation]);

  const changeStyleBody = () => {
    // Change the style of document.body based on sidebarAnimation
    document.body.style.overflow = sidebarAnimation ? "hidden" : "auto";
  };

  return (
    <>
      <div
        className={sidebarAnimation ? "products-cart active" : "products-cart "}
      >
        <div className="row">
          <div
            className="col-md-8 col-5 "
            onClick={() => setSidebarAnimation(false)}
          ></div>
          <div className="col-md-4 col-7 px-0">
            <div className="cart">
                <div
                  className="close-img text-end"
                  onClick={() => setSidebarAnimation(false)}
                >
                  <img src={close} alt="" />
                </div>
                <div className="cart-title text-center">
                  <h3>My Cart</h3>
                </div>
                <div className="cart-sub-title">
                  <span>Cart Summary</span>
                </div>
                {cartDetails?.products?.map((product) => (
                  <div
                    className="product-container"
                    key={product?.product?._id}
                  >
                    <div className="product-info">
                      <div className="product-img">
                        <img
                          src={product.product.imageCover}
                          className="w-25"
                        ></img>
                      </div>
                      <div className="product-title">
                        <span>{product?.product?.title}</span>
                      </div>
                    </div>
                    <div className="count ">
                      <span>Quantity:{product.count}</span>
                    </div>
                    <div className="price ">
                      <span>Price:{product.price}</span>
                    </div>
                    <div className="remove-from-cart mt-2 text-end ">
                      <button
                        className="remove-btn"
                        onClick={() => deleteProduct(product?.product?._id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="total-price">
                  <span>Total Price :</span>
                  <span>{cartDetails?.totalCartPrice}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
