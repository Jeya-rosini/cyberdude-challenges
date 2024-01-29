import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DestinationPage from "./pages/DestinationPage";
import ContactPage from "./pages/ContactPage";
import App from "./App"
import { Route, createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
    Route({
        path: '/',
        element: <HomePage />,
    }),
    Route({
        path: '/',
        element: <AboutPage />,
    }),
    Route({
        path: '/',
        element: <DestinationPage />,
    }),
    Route({
        path: '/',
        element: <ContactPage/>,
    }),
]);


const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(<App/>);