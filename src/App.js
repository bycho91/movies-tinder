import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regsiter from "./pages/Regsiter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Regsiter />} path="/register" />
      </Routes>
    </div>
  );
}

export default App;
