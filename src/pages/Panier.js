import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carte from "../components/Carte";

function Panier() {
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Navbar />
          <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
            <div className=" flex  flex-col border-2 border-white  ">
              <div className="flex flex-row justify-between m-10 text-white">
                <div>
                  <div className="mx-5">Produits</div>
                  <div className=" flex flex-col  ">
                    <Carte img="./assets/ph.jpg" title="Papier Hygiénique" />
                    <Carte img="./assets/jus.jpeg" title="Jus" />
                    <Carte img="./assets/nutella.jpg" title="Nutella" />
                  </div>
                </div>
                <div className="mx-5">
                  <div className="mx-5">
                    Quantites
                    <div className=" flex flex-col  pt-5">
                      <input type="number" />
                    </div>
                  </div>
                </div>
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
