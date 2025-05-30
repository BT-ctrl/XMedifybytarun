import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App";
import Home from "./Home/Home";
import Search from "./Search/Search";
import MyBookings from "./MyBookings/MyBookings";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

// Create custom MUI theme
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
    },
    secondary: {
      main: "#1B3C74",
    },
    success: {
      main: "#00A500",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
          "@media (max-width:600px)": {
            fontSize: "36px",
          },
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
          "@media (max-width:600px)": {
            fontSize: "32px",
          },
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
          "@media (max-width:600px)": {
            fontSize: "22px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

// Render the root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
