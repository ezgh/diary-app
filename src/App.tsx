import { Routes, Route, Navigate } from "react-router-dom";

import "./app.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
