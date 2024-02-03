import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Guest from './layout/GuestPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Guest />,
    children: [{
      path: '/',
      element: <App />
    }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
