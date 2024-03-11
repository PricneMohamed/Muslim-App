import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Salat from "./components/Salat";
import Azkar from "./components/Azkar";

function App() {
  return (
    <div className="App h-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salat" element={<Salat />} />
        <Route path="/azkar" element={<Azkar />} />
      </Routes>
    </div>
  );
}

export default App;
