import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { useState } from "react";
import { addToCart, getLoggedUserCart } from "./services/dataServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartDetails, setCartDetails] = useState(null);
  const [sidebarAnimation, setSidebarAnimation] = useState(false);

    const notifySuccess = (message) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    const notifyError = () => {
      toast.error("Error notification!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
  // THIS FUNCTION REQUIRED IN TASK
  const userCart = async () => {
    const data = await getLoggedUserCart();
    setCartNumber(data?.data.numOfCartItems);
    setCartDetails(data?.data.data);
  };
  // THIS FUNCTION REQUIRED IN TASK
  const addProductToCart = async (id) => {
    const data = await addToCart(id);
    setCartNumber(data?.data.numOfCartItems)
notifySuccess(data?.data.message); 
 };
  let routers = createHashRouter([
    {
      path: "",
      element: (
        <Layout
          cartNumber={cartNumber}
          setCartDetails={setCartDetails}
          setSidebarAnimation={setSidebarAnimation}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <ProductDetails
              addProductToCart={addProductToCart}
              userCart={userCart}
              cartDetails={cartDetails}
              setCartDetails={setCartDetails}
              setCartNumber={setCartNumber}
              setSidebarAnimation={setSidebarAnimation}
              sidebarAnimation={sidebarAnimation}
              cartNumber={cartNumber}
            />
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      {/* <button onClick={notifyError}>Show Error Notification</button> */}
      <ToastContainer />
      {/* <Provider sotre={store} /> */}
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
