import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Panier() {
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Navbar />
          <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
            <div className=" flex  flex-col border-2 border-white  ">
              <div className="flex flex-row justify-between m-10 text-white">
                <div className="mx-5">Produits</div>
                <div className="mx-5">Quantites</div>
                <div className="mx-5">Total</div>
                <div></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Panier;
