import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Users from "../pages/Users/Users";
// import UserDetails from "../pages/UserDetails/UserDetails";
import Login from "../pages/login/Login";
import AppShell from "../components/AppShell/AppShell";
import Users from "../pages/dashboard/userDashboard/Users";
import UserDetails from "../components/UserComponents/userDetails/UserDetails";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <AppShell />,
    children: [
    //   { index: true, element: <Dashboard /> },
    { path: "/users", element: <Users /> },
      { path: "users/:id", element: <UserDetails /> },
    ],
  },
]);
