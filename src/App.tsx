import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import { routes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }, i) => (
            <Route key={i} path={path} Component={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
