import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
