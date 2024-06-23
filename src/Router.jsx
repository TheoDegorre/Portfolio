import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExpePage from "./pages/ExpePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/experience",
        element: <ExpePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ],
  },
]);

export default router;
