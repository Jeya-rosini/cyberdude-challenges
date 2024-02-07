import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Guest from './layout/Guest.jsx';
import LearnPage from './pages/LearnPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
 

const languageRouter = createBrowserRouter([
  {
    path: '/',
    element: <Guest />,
    children: [
      {
        path: '/',
        element:<App/>
      },
      {
      path: '/learn',
      element: <LearnPage />,
    },
    ],
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={languageRouter}/>
)
