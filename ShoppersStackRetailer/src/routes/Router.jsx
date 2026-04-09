import App from "../App";
import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../modules/Dashboard";
import StoreProfile from "../components/StoreProfile";
import Reviews from "../components/Reviews";
import Orders from "../components/Orders";
let routes =createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
   {
        path: "/landingpage",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
              path:'/landingpage/storeprofile',
              element:<StoreProfile/>
            },
            {
              path:'/landingpage/reviews',
              element:<Reviews/>
            },
            {
              path : "/landingpage/orders",
              element:<Orders/>
            }
          ]
    }
      
])
export default routes;