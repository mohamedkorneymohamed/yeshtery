import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";

function App() {

  let routers = createHashRouter([
    {
      path: "",
      element: (
        <Layout
       
        />
      ),
      children: [
        {
          index: true,
          element: (
            <ProductDetails
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
      <ToastContainer/>
      {/* <Provider sotre={store} /> */}
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
