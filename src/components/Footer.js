import React from "react";

import "./footer.css";
import { BsBasket, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footcont flex flex-col lg:flex-row w-full justify-between text-gray-50 p-3">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <div className="flex flex-row">
          <BsBasket size={25} color="white" />
          <h1 className="text-white text-xl ml-3">J'S Market </h1>
        </div>
        <p className="py-3">
          Un service de livraison à domicile des produits du super-marché. Créer
          en décembre 2022 par les munyaka à kinshasa rdc.
        </p>
      </div>
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <h1>Contacts</h1>
        <div className="mt-4 centreColum">
          <div className="centerRow pr-14 mb-3">
            <a href="https://www.instagram.com/invites/contact/?i=1o83r5prsg16y&utm_content=qi2dh94">
              <AiOutlineInstagram size={25} className="cursor-pointer" />
            </a>
            <h5 className="px-3">Js market</h5>
          </div>
          <div className="centerRow">
            <a href="ttps://wa.me/message/TFTODJF6X5S4M1" className="px-3">
              <BsFillTelephoneFill size={20} />{" "}
            </a>
            +243 823456789
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-row">
        <div>
          <IoLocationOutline size={30} className="cursor-pointer" />
        </div>
        <h3 className="ml-2">Congo DRC, Kinshasa</h3>
      </div>
    </div>
  );
}

export default Footer;
