import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GuestPage from './layout/GuestPage.jsx';


const musicRouter = createBrowserRouter([
  {
    path: '/',
    element: <GuestPage />,
    children: [
      {
        path: '/home',
        element: <App />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={musicRouter}/>
)
