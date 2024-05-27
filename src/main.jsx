import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HireMe from "./components/pages/HireMe";
import "./App.css";
import SharedLayout from "./components/layout/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hire-me" element={<HireMe />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
