import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import Box from "../components/Box";
function Home() {
  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className="flex  flex-row  align-middle mt-24  bg-gradient-to-r from-sky-900 to-red-900">
        <div className="flex flex-col  text-white bg-scroll mt-2 p-8">
          <p className=" mt-[90px] ml-3  font-bold text-[45px] w-[800px]">
            J'S Market offre un service de Livraison À Domicile fiable et de
            qualité.
          </p>
          <p className=" w-[500px]  ml-3 text-lg">
            Nous vous livrons les produits du super-marché. N'hésitez pas de
            nous contacter. Nous sommes à votre service
          </p>
          <button className="btn py-3  ml-3 my-4 w-40  border-red-400 rounded-3xl text-white border-2 ">
            Contactez-nous
          </button>
        </div>
        <div className="">
          <img
            src="./assets/Capture.PNG"
            alt="productImage"
            className="mt-20 p-4"
          />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex  flex-col justify-center">
          <div className="flex  mt-3 text-3xl justify-center">
            <h2 className=" bg-blue-400 rounded-xl text-white p-3">
              Les Super-Marchés
            </h2>
          </div>
          <div className="flex flex-row p-5">
            <Box
              img="../assets/kin-mart.png"
              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Box
              img="../assets/kin-marché.png"
              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Box
              img="../assets/city-market.png"
              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>

        <div className="flex mt-3 text-3xl justify-center">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Nouveautes
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
