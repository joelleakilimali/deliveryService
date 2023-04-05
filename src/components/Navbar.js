import React, { useContext } from "react";
import "./navbar.css";
import { FaBaby, FaBeer } from "react-icons/fa";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiMessageDetail, BiUser } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/AuthCont";

const Navbar = () => {
  const navigate = useNavigate();
  const { getUserData, Logout, profile } = useContext(Context);
  const user = getUserData();
  const handleLogout = () => {
    Logout();
    navigate("/");
  };
  return (
    <div className="header flex flex-row justify-between items-center flex-wrap p-4 md:px-10 md:py-4">
      <div className="flex flex-row items-center">
        <BsBasket size={25} color="white" />
        <h1 className="font-bold px-3">J'S Market</h1>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap w-full py-4 md:w-auto md:py-0">
        <Link to="/">
          <h1 className="item mx-3 font-semibold">Accueil</h1>
        </Link>
        <Link to="/supermarche">
          <h1 className="item mx-3">Shopping</h1>
        </Link>
        <h1 className="item mx-3">Nouveautés</h1>
        <h1 className="item mx-3">Contacts</h1>
        <Link to="/panier">
          <h1 className="item mx-3">Panier</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <BsSearch className="icon mr-4 md:mr-8" size={30} />
        <Link to="/connexion">
          <BiUser className="icon mr-4 md:mr-8" size={30} />
        </Link>
        <BiMessageDetail className="icon mr-4 md:mr-8" size={30} />
        <div>
          {user && (
            <div className="flex flex-row items-center justify-center md:justify-between">
              <div>
                <h1 className="text-base px-3">{user.noms}</h1>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="text-base font-medium"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
