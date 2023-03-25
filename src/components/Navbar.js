import React, { useContext } from "react";
import "./navbar.css";
import { FaBaby, FaBeer } from "react-icons/fa";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiMessageDetail, BiUser } from "react-icons/bi";

import { Link } from "react-router-dom";
import { Context } from "../context/AuthCont";

const Navbar = () => {
  const { getUserData, Logout, profile } = useContext(Context);
  const user = getUserData();

  return (
    <div className="header">
      <div className="flex flex-row  ">
        <BsBasket size={25} color="white" />
        <h1 className=" font-bold px-3 ">J'S Market</h1>
      </div>
      <div className="  flex flex-row cursor-pointer text-lg ">
        <Link to="/">
          <h1 className="item  mx-3 font-semibold">Accueil </h1>
        </Link>
        <Link to="/supermarche">
          <h1 className=" item mx-3 ">Shopping</h1>
        </Link>
        <h1 className="item mx-3">Nouveautés</h1>
        <h1 className="item mx-3"> Contacts</h1>
        <Link to="/panier">
          <h1 className="item  mx-3">Panier</h1>
        </Link>
      </div>
      <div className=" flex flex-row">
        <BsSearch className="icon " size={30} />
        <Link to="/connexion">
          <BiUser className="icon" size={30} />
        </Link>
        <BiMessageDetail className="icon" size={30} />
        <div>
          {user && (
            <div className="flex justify-between ">
              <div>
                {" "}
                <h1 className="text-base px-3">{user.noms}</h1>
              </div>
              <div>
                <button onClick={Logout}>Deconexion</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
