import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SingleProjectPage from "./pages/SingleProjectPage.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LocationProvider } from "./contexts/LocationContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
        loader: () => fetch("http://localhost:3310/project"),
      },
      {
        path: "/project/:id",
        element: <SingleProjectPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3310/project/${params.id}`),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LocationProvider>
        <RouterProvider router={router} />
      </LocationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
