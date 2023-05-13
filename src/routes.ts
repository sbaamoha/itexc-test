import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

export const routes: RoutesType = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
  { path: "/forgot-password", component: ForgotPassword },
];
