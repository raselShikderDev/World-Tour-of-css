import { createBrowserRouter, RouterProvider } from "react-router-dom";

// App Layout
import Layout from "./Layout/Layout";

//All Apps Files
import "./App.css";

// All Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import ErrorPage from "./Pages/ErrorPage";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
