import App from "../App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
let routes =createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
])
export default routes;