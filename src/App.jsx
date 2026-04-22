import "./App.css";

import { RouterProvider,createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./components/Layout/AppLayout.jsx";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Country } from "./pages/Country.jsx";
import { CountryDetails } from "./pages/CountryDetails.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";


const router=createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/country",
          element:<Country/>
        },
        {
          path:"/country/:id",
          element:<CountryDetails/>
        }
      ]
  }
]);
export function App() {
  return <RouterProvider router={router} />;
}

