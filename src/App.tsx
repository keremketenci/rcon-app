// styles
import "./App.css";

// routes
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "@/components/Navbar/Navbar";

// pages
import Home from "@/pages/Home/page";
import Settings from "@/pages/Settings/page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
