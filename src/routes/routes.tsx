import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/login/Login";
import AppShell from "../components/AppShell/AppShell";
import Users from "../pages/dashboard/userDashboard/Users";
import UserDetails from "../components/UserComponents/userDetails/UserDetails";

export const router = createBrowserRouter([
  // Redirect root to login
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // Login page (no AppShell)
  {
    path: "/login",
    element: <Login />,
  },

  // Dashboard layout
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
