import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddProduct() {
  const addProduct = async () => {
    await axios
      .post("http://localhost:3001/products/", body)
      .then((res) => {
        console.log(res?.data?.message);
        toast(res?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((e) => {});
  };

  const data = {
    name: "",
    price: "",
    dateExp: "",
  };
  const [body, setBody] = useState();
  console.log(body);

  return (
    <div className="flex flex-col ">
      <ToastContainer position="top-left" />

      <Navbar />
      <div className="flex-1">
        <div className="flex  flex-col mt-20 ">
          <div className="mt-10 flex flex-row ">
            <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 w-[25%]">
              <h2>Produits</h2>

              <h2 className="pt-2">100</h2>
            </div>
            <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 w-[25%]">
              <div>commandes</div>
              <h2 className="pt-2">100</h2>
            </div>
            <div className="adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 w-[25%]">
              <div>Utilisateurs</div>
              <h2 className="pt-2">100</h2>
            </div>
            <div className=" adminbox flex flex-col   border-2  border-gray-100 p-5 m-5 w-[25%]">
              <div>Utilisateurs</div>
              <h2 className="pt-2">100</h2>
            </div>
          </div>
          <div className="flex justify-between mt-20 bg-gradient-to-r from-sky-900 to-red-900">
            <div className="px-5 text-white">
              <h2 className="font-bold text-3xl ">Ajouter nouveaux produits</h2>
              <div className="flex w-[100%] pt-3 ">
                <div className="input ">
                  <div className=" flex  m-8">
                    <h5 className=" text-xl p-2 ">Nom du produits</h5>
                    <input
                      type="text"
                      placeholder=""
                      className="p-2 mx-2 w-[300px] text-lg text-black "
                      onChange={(e) => {
                        setBody({ ...body, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className=" flex  m-8">
                    <h5 className=" text-xl p-2 ">Prix : </h5>
                    <input
                      type="text"
                      placeholder=""
                      className="p-2 mx-2 w-[300px] text-lg text-black "
                      onChange={(e) => {
                        setBody({ ...body, price: e.target.value });
                      }}
                    />
                  </div>
                  <div className=" flex  m-8">
                    <h5 className=" text-xl p-2 ">Date d'expiration :</h5>
                    <input
                      type="text"
                      placeholder=""
                      className="p-2 mx-2 w-[300px] text-lg  text-black    "
                      onChange={(e) => {
                        setBody({ ...body, dateExp: e.target.value });
                      }}
                    />
                  </div>
                  <button
                    className=" border-gray-200 ml-1 text-2xl  text-blue-500 pt-2 "
                    onClick={addProduct}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
}

export default AddProduct;
