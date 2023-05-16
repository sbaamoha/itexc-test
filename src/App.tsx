// import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// import { routes } from "./routes";
// import HomePage from "./pages/home";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import Login from "./pages/login";
import Signup from "./pages/signup";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./utils/redux/slices/counterReducer";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* {routes.map(({ path, component }, i) => (
            <Route key={i} path={path} Component={component} />
          ))} */}
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/forgot-password" Component={ForgotPassword} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
