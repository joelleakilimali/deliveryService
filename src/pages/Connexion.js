import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaUserCircle } from "react-icons/fa";

function Connexion() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
        <div className="flex flex-row justify-center pt-4">
          <FaUserCircle color="white" size={90} />
        </div>
        <div className=" flex  flex-col border-2 border-white mx-24 my-7 ">
          <div className="flex flex-row text-white mb-5 ">
            <h5 className="text-3xl  font-bold ml-10">Creez Un compte</h5>
          </div>
          <div className="flex justify-evenly m-10">
            <div>
              <div className="input">
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Noms </h5>
                  <input
                    type="text"
                    placeholder="Noms"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Prenom </h5>
                  <input
                    type="text"
                    placeholder="Prenom"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Adresse Email </h5>
                  <input
                    type="text"
                    placeholder="Adresse Email"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Telephone </h5>
                  <input
                    type="text"
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
              </div>
            </div>
            <div className="mx-5"></div>
            <div>
              <div className="input">
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Adresse</h5>
                  <input
                    type="text"
                    placeholder="adresse"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>

                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Mot de passe </h5>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">
                    Confirmer Mot de passe
                  </h5>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white  text-lg p-2 ">
                    Avez-vous un compte?
                  </h5>
                  <button className=" ml-1 text-sm text-blue-500">
                    Connectez-vous..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
