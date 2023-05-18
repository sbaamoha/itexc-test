import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Signup from "./pages/signup";

export const routes: RoutesType = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/Profile", component: Profile },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
  { path: "/forgot-password", component: ForgotPassword },
];
