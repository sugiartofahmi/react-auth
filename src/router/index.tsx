import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Dashboard from "../views/common/Dashboard";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
export default Router;
