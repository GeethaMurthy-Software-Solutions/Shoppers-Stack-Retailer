import App from "../App";
import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
let routes =createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
export default routes;