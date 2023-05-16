// import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { routes } from "./routes";

// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./utils/redux/slices/counterReducer";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {routes.map(({ path, component }, i) => (
            <Route key={i} path={path} Component={component} />
          ))}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
