import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
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

  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductDetails />,
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
