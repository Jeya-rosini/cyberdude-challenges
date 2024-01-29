import React from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/index.css";
import GuestLayout from "./layouts/guest";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DestinationPage from "./pages/DestinationPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element:<HomePage/>,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },  
            {
                path: '/destination',
                element: <DestinationPage />,
            },
            {
                path: '/contact',
                element: <ContactPage/>,
            },
        ],
        errorElement:<ErrorPage/>
    },
 
]);


const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(<RouterProvider router = {router}/>);