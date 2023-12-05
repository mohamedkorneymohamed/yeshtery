import "./App.scss";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import Software from "./pages/Software/Software";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import CaseStudies from "./Components/ItSolutionComponents/CaseStudies/CaseStudies";

function App() {
  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "software", element: <Software /> },
        { path: "casestudies", element: <CaseStudies/> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      {/* <Provider sotre={store} /> */}
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
