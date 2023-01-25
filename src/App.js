import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/supermarche" element={<Shop />} />
          <Route exact path="/connexion" element={<Connexion />} />
          <Route exact path="/connexion/login" element={<Login />} />
          <Route exact path="/panier" element={<Panier />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
