import React from "react";

import "./footer.css";
import { BsBasket, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
function Footer() {
  return (
    <div className="footcont flex flex-row w-[100%] justify-between text-gray-50">
      <div className="w-[30%] p-3">
        <div className="flex flex-row">
          <BsBasket size={25} color="white" />
          <h1 className=" text-white  text-xl ml-3">J'S Market </h1>
        </div>
        <p className="W-[100%] py-3">
          Un service de livraison à domicile des produits du super-marché. Créer
          en décembre 2022 par les munyaka à kinshasa rdc.
        </p>
      </div>
      <div className="p-3">
        <h1>Contacts</h1>
        <div className="mt-4 ">
          <div className="flex flex-row ">
            <AiOutlineInstagram />
            <h5 className="px-3">Js market</h5>
          </div>
          <div className="flex flex-row ">
            <BsFillTelephoneFill />
            <h5 className="px-3">+243 823456789</h5>
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-row">
        <div>
          <IoLocationOutline size={30} />
        </div>
        <h3>Congo DRC , kinshasa </h3>
      </div>
    </div>
  );
}

export default Footer;
