import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import ContextProvider from "./context/AuthCont";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ReportPage from "./pages/Admin/report/Report";
import "../src/components/footer.css";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="fullbody">
      <BrowserRouter>
        <ContextProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/supermarche" element={<Shop />} />
              <Route exact path="/connexion" element={<Connexion />} />
              <Route exact path="/connexion/login" element={<Login />} />
              <Route exact path="/panier" element={<Panier />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/admin/addProduct" element={<AddProduct />} />
              <Route exact path="/admin/report" element={<ReportPage />} />
            </Routes>
          </QueryClientProvider>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
