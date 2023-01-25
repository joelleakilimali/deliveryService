import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar />
        <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
          <div className="flex flex-row justify-center pt-4">
            <FaUserCircle color="white" size={90} />
          </div>
          <div className=" flex  flex-col border-2 border-white mx-64 my-7 ">
            <div className="flex flex-row text-white mb-5 ">
              <h5 className="text-3xl  pt-4 font-bold ml-10">Connexion</h5>
            </div>
            <div className="flex justify-center m-10">
              <div className="mx-5"></div>
              <div>
                <div className="input">
                  <div className="  mx-8">
                    <h5 className="text-white text-xl p-2 ">Adresse email</h5>
                    <input
                      type="text"
                      placeholder="adresse"
                      className="p-2 mx-2 w-[300px] text-lg font-bold"
                    />
                  </div>

                  <div className="  mx-8">
                    <h5 className="text-white text-xl p-2 ">Mot de passe </h5>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      className="p-2 mx-2 w-[300px] text-lg font-bold"
                    />
                  </div>

                  <div className="  mx-8">
                    <h5 className="text-white  text-lg p-2 ">
                      Mot de passe oublié?
                    </h5>
                    <Link to="/connexion/login">
                      <button className=" ml-1 text-sm text-blue-500">
                        Cliquez ici
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
