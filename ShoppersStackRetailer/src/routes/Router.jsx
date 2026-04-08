import App from "../App";
import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../modules/Dashboard";
let routes =createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path:'/login',
    element:<Login/>
  }
   {
        path: "/landingpage",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
          ]
    }
      
])
export default routes;