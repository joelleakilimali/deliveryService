import React from "react";
import "./navbar.css";
import { FaBaby, FaBeer } from "react-icons/fa";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiMessageDetail, BiUser } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="flex flex-row  ">
        <BsBasket size={25} color="white" />
        <h1 className=" font-bold px-3 ">J'S Market</h1>
      </div>
      <div className="  flex flex-row cursor-pointer text-lg ">
        <h1 className="item  mx-3 font-semibold">Accueil</h1>
        <h1 className=" item mx-3 ">Super-Marché</h1>
        <h1 className="item mx-3">Nouveautés</h1>
        <h1 className="item mx-3"> Contacts</h1>
        <h1 className="item  mx-3">Panier</h1>
      </div>
      <div className=" flex flex-row">
        <BsSearch className="icon " size={30} />
        <BiUser className="icon" size={30} />
        <BiMessageDetail className="icon" size={30} />
      </div>
    </div>
  );
};

export default Navbar;