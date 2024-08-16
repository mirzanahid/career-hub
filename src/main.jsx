import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import Root from "./components/Root/Root";
import Statistics from "./pages/Statistics/Statistics";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('./jobs.json'),
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job_details/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('./jobs.json'),
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);
