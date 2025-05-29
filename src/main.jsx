import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; 
import App from "./App";
import Search from "./Search/Search";
import Home from "./Home/Home";
import MyBookings from "./MyBookings/MyBookings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme(); 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "search", element: <Search /> },
      { path: "my-bookings", element: <MyBookings /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
