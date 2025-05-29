import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import App from "./App";
import Home from "./Home/Home";
import Search from "./Search/Search";
import MyBookings from "./MyBookings/MyBookings";

import { ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,         
        element: <Home />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "my-bookings",  
        element: <MyBookings />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
