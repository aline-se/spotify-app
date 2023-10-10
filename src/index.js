import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css"
import App from "./pages/App";
import Auth from "./pages/auth";
import Layout from "./components/layout";
import NotFound from "./pages/notFound";
import Albums from "./pages/albums";
import SessionEnded from "./pages/sessionEnded";

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  }
);

axios.interceptors.response.use(undefined,
  error => {
      if (error.response.status === 401) {
          localStorage.clear();
          router.navigate('/session-ended')
      } else {
          return error;
      }
  }
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:artist/albums",
        element: <Albums />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/session-ended",
    element: <SessionEnded />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
