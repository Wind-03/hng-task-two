import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Movie from './components/Movie.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "movie/:movieId",
    element:<Movie />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
