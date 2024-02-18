import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestPage from "./layout/GuestPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const cartRouter = createBrowserRouter([
  {
    path: "/",
    element: <GuestPage />,
    children: [
      {
        path: "/",
        element: <CartPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={cartRouter} />
);
