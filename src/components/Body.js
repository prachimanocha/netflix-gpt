import React from 'react'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
  ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body