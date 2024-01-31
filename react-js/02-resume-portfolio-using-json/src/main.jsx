import React from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./layout/guest.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";


 const resumeRouter = createBrowserRouter([
   {
     path: '/',
     element: <Guest />,
     children: [
       {
         path: '/',
         element:<AboutPage/>
       },
       {
         path: '/education',
         element: <EducationPage/>,
       },
       {
         path: '/contact',
         element: <ContactPage/>,
       },
       {
         path: '/skills',
         element: <SkillsPage/>,
       },
       {
         path: '/experience',
         element:<ExperiencePage/>,
       },
     ],
     errorElement:<ErrorPage/>,
}
])

const resumeId = document.getElementById("resume");
const resume = createRoot(resumeId);
resume.render(<RouterProvider router = {resumeRouter} />)