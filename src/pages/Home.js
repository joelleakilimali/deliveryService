import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col text-white bg-scroll mt-24 bg-gradient-to-r from-sky-900 to-red-900 ">
        <p className=" mt-[90px] ml-3 text-3xl w-[400px]">
          J'S Market offre un service de Livraison À Domicile fiable et de
          qualité.
        </p>
        <p className=" w-[500px] mt-3 ml-3">
          Nous vous livrons les produits du super-marché. N'hésitez pas de nous
          contacter. Nous sommes à votre service
        </p>
        <button className="py-3 my-4 w-40  border-red-400 rounded-3xl text-white border-2 ">
          Contactez-nous
        </button>
        dsgbh
      </div>
    </div>
  );
}

export default Home;
