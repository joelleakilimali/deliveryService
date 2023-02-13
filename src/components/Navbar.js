import React from "react";
import "./navbar.css";
import { FaBaby, FaBeer } from "react-icons/fa";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiMessageDetail, BiUser } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  let user = window.localStorage.getItem("userData");
  const userInfo = JSON.parse(user);
  console.log(userInfo);
  return (
    <div className="header">
      <div className="flex flex-row  ">
        <BsBasket size={25} color="white" />
        <h1 className=" font-bold px-3 ">J'S Market</h1>
      </div>
      <div className="  flex flex-row cursor-pointer text-lg ">
        <Link to="/">
          <h1 className="item  mx-3 font-semibold">Accueil</h1>
        </Link>
        <Link to="/supermarche">
          <h1 className=" item mx-3 ">Super-Marché</h1>
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
        <h1 className="text-base">{userInfo.firstName}</h1>
      </div>
    </div>
  );
};

export default Navbar;
