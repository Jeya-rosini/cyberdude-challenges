import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GuestPage from './layout/GuestPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestPage />,
    children: [
      {
        path: '/',
        element:<App/>,
      }
    ],
    errorElement:<ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
