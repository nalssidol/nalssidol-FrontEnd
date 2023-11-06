import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";
import NotFound from "./NotFound";
import { Weather } from "./openAPI/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "weather",
        element: <Weather />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
