import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  AddJob,
  Admin,
  Register,
  Error,
  DashboardLayout,
  Login,
  Landing,
  Stats,
  Profile,
  EditJob,
  DeleteJob,
  AllJobs,
  Counter,
} from "./pages";
import AppStore from "./redux/AppStore";
import { Provider } from "react-redux";
import { action as registerAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as AddJobAction } from "./pages/AddJob";
import { loader as AllJobsLoader } from "./pages/AllJobs";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as editJobLoader } from "./pages/EditJob";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobAction,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: AllJobsLoader,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },

          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
          { path: "counter", element: <Counter /> },
        ],
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={AppStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
