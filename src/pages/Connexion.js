import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { apiClient } from "../utils/apiClient";
import { useRegister } from "../hooks/auth";

const data = {
  noms: "",
  prenom: "",
  password: "",
  email: "",
  telephone: "",
  adresse: "",
  confirmpaswword: "",
};

function Connexion() {
  const [body, setBody] = useState(data);
  const { mutateAsync: registerUser, isLoading } = useRegister(body);
  const WarningToast = ({ message }) => {
    return (
      <div className="flex flex-row items-center">
        <span className="material-icons mr-2 text-yellow-500"></span>
        <span className="text-yellow-500">{message}</span>
      </div>
    );
  };

  const createUser = async (event) => {
    event.preventDefault();
    if (body.password !== body.confirmpaswword) {
      toast("les mots de passe ne correspondent pas ");
      return;
    }
    if (body.password)
      if (!body || body.email === "" || body.password === "") {
        toast.warning(<WarningToast message=" Remplissez les champs svp" />, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    registerUser(body);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <ToastContainer position="top-left" />
      <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
        <div className="flex flex-row justify-center pt-4">
          <FaUserCircle color="white" size={90} />
        </div>
        <div className=" flex  flex-col border-2 border-white mx-24 my-7 ">
          <div className="flex flex-row text-white mb-5 ">
            <h5 className="text-3xl  font-bold ml-10">Creez Un compte</h5>
          </div>
          <form onSubmit={createUser} className="flex justify-evenly m-10">
            <div>
              <div className="input">
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Noms </h5>
                  <input
                    required
                    type="text"
                    name="noms"
                    placeholder="Noms"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, noms: e.target.value });
                    }}
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Prenom </h5>
                  <input
                    required
                    type="text"
                    name="prenom"
                    placeholder="Prenom"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, prenom: e.target.value });
                    }}
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Adresse Email </h5>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Adresse Email"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, email: e.target.value });
                    }}
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Telephone </h5>
                  <input
                    required
                    type="tel"
                    name="telephone"
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, telephone: e.target.value });
                    }}
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
                    required
                    type="text"
                    placeholder="adresse"
                    name="adresse"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, adresse: e.target.value });
                    }}
                  />
                </div>

                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">Mot de passe </h5>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                    onChange={(e) => {
                      setBody({ ...body, password: e.target.value });
                    }}
                  />
                </div>
                <div className="  mx-8">
                  <h5 className="text-white text-xl p-2 ">
                    Confirmer Mot de passe
                  </h5>
                  <input
                    required
                    type="password"
                    name="confirmpaswword"
                    onChange={(e) => {
                      setBody((prev) => ({
                        ...prev,
                        confirmpaswword: e.target.value,
                      }));
                    }}
                    placeholder="Mot de passe"
                    className="p-2 mx-2 w-[300px]"
                  />
                </div>
                <div className="  mx-8">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className=" ml-1 text-sm text-blue-500"
                  >
                    {isLoading ? "Ptientez" : "Enregistrer"}
                  </button>

                  <h5 className="text-white  text-lg p-2 ">
                    Avez-vous un compte?
                  </h5>
                  <Link to="/connexion/login">
                    <button className=" ml-1 text-sm text-blue-500">
                      Connectez-vous
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
