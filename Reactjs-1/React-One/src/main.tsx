import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Product from "./pages/product.tsx";
import User from "./pages/User.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import InputCapture from "./pages/InputCapture.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/product", element: <Product /> },
      { path: "/contact", element: <Contact /> },
      { path: "/InputCapture", element: <InputCapture /> },
      { path: "/user/:username", element: <User /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
