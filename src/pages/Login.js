import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [body, setBody] = useState();
  const [user, setUser] = useState({});

  const data = {
    password: "",
    email: "",
  };
  const { email, password } = data;
  const Login = async () => {
    await axios
      .post("http://localhost:3001/users/login", body)
      .then((res) => {
        console.log(res?.data);
        toast(res?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        const userData = localStorage.getItem("userData");
        const parsed = JSON.parse(userData);
        setUser(parsed);
      })
      .catch((e) => {
        console.log(e);
        toast("Auth failed", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  console.log(user.lastName);
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
                      onChange={(e) => {
                        setBody({ ...body, email: e.target.value });
                      }}
                    />
                  </div>

                  <div className="  mx-8">
                    <h5 className="text-white text-xl p-2 ">Mot de passe </h5>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      className="p-2 mx-2 w-[300px] text-lg font-bold"
                      onChange={(e) => {
                        setBody({ ...body, password: e.target.value });
                      }}
                    />
                  </div>

                  <div className="  mx-8">
                    <button
                      className=" ml-1 text-sm text-blue-500"
                      onClick={Login}
                    >
                      connexion
                    </button>
                    <h5 className="text-white  text-lg p-2 ">
                      Mot de passe oublié?
                    </h5>
                    <Link to="/connexion/login">
                      <button className=" ml-1 text-sm text-blue-500">
                        Cliquez ici
                      </button>
                      <ToastContainer position="top-left" />
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
