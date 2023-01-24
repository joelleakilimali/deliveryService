import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Connexion from "./pages/Connexion";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/supermarche" element={<Shop />} />
          <Route exact path="/connexion" element={<Connexion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
