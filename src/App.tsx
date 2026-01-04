import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Donate from "./pages/donate";

export default function App() {
  return (
    <Routes>
      <Route path="/web/" element={<Home />} />
      <Route path="/web/donate" element={<Donate />} />
    </Routes>
  );
}
