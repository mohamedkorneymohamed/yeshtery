import React, { Component, Suspense ,lazy} from "react";
import AllProducts from "../../Components/AllProducts/AllProducts";
import Details from "../../Components/Details/Details";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ProductService from "../../services/dataService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyLoadedAllProducts = lazy(() =>
  import("../../Components/AllProducts/AllProducts")
);

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: 0,
      products: [],
      productsCart: [],
      isLoading: false,
    };
    this.addToCart = this.addToCart.bind(this);
    this.getProductsDetails = this.getProductsDetails.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
  }
  deleteProducts(productId) {
    try {
      const { productsCart } = this.state;

      const filteredProducts = productsCart.filter(
        (product) => product.id !== productId
      );
      const myCart = ProductService?.getCart();
      this.setState({ cart: myCart, productsCart: filteredProducts });

      this.setState((prevState) => ({
        products: [
          {
            ...prevState.products[0],
            quantity: Math.max(0, prevState.products[0].quantity - 1),
          },
        ],
      }));

      console.log("Product deleted successfully:", productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  getProductsDetails(productId) {
    try {
      const myProducts = [...ProductService?.getAllProducts()];
      const filteredProducts = myProducts?.filter(
        (product) => product.id == productId
      );

      this.setState({ products: filteredProducts });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
  addToCart(productId) {
    try {
      const myCart = ProductService?.getCart();
      const myProductsCart = [...ProductService?.getAllProducts()];
      const filteredProducts = myProductsCart?.filter(
        (product) => product.id == productId
      );

      this.setState({ isLoading: true });
      this.setState({ productsCart: filteredProducts });

      if (myCart == 0) {
        this.setState({ cart: myCart + 1 });

        setTimeout(() => {
          this.setState({ isLoading: false });

        }, 1000);
        this.setState((prevState) => {
          const updatedQuantity = prevState.products[0].quantity + 1;

          if (prevState.products[0].quantity === 0) {
            this.notifySuccess();
            return {
              products: [
                {
                  ...prevState.products[0],
                  quantity: updatedQuantity,
                },
              ],
            };
          }

          return this.notifyError(); // Do nothing if quantity would be 0
        });
      } else {
        // Do nothing if cart is not empty
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
  handleIncrement = () => {
    this.setState((prevState) => ({
      products: [
        {
          ...prevState.products[0],
          quantity: prevState.products[0].quantity + 1,
        },
      ],
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      const updatedQuantity = Math.max(0, prevState.products[0].quantity - 1);

      if (updatedQuantity === 0) {
        // Call the deleteProducts function with the productId
        const productIdToDelete = prevState.productsCart[0].id;
        this.deleteProducts(productIdToDelete);
      }

      return {
        products: [
          {
            ...prevState.products[0],
            quantity: updatedQuantity,
          },
        ],
      };
    });
  };
  notifySuccess = () => {
    toast.success("Product added successfully to your cart", {
      position: "top-right",
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  notifyError = () => {
    toast.error("This product has already  added to your cart ", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  render() {
    const { products, isLoading, productsCart } = this.state;

    return (
      <>
        <ToastContainer />
        <Navbar
          cart={this.state.cart}
          products={products}
          productsCart={productsCart}
          deleteProducts={this.deleteProducts}
        />
        <Details
          addToCart={this.addToCart}
          getProductsDetails={this.getProductsDetails}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          products={products}
          isLoading={isLoading}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedAllProducts getProductsDetails={this.getProductsDetails} />
        </Suspense>
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
