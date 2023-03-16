import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
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
      .catch((e) => {
        console.log(e);
      });
  };

  const data = {
    name: "",
    price: "",
    dateExp: "",
    image: "",
  };

  const [body, setBody] = useState(data);
  console.log(body);

  return (
    <div className="flex flex-col ">
      <ToastContainer position="top-left" />

      <Navbar />
      <div className="  flex-1">
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
              <h2 className="font-bold text-3xl pt-5 ">
                Ajouter nouveaux produits
              </h2>
              <div className="flex justify-evenly m-10">
                <div className="flex w-[100%] pt-3 ">
                  <div className="input ">
                    <div className="input">
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">
                          Nom du produit
                        </h5>
                        <input
                          type="text"
                          placeholder=" Nom du produit"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, name: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">Prix: </h5>
                        <input
                          type="text"
                          placeholder="Prix"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, price: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">
                          Date d'expiration
                        </h5>
                        <input
                          type="text"
                          placeholder="Date d'expiration"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, dateExp: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">Category </h5>
                        <input
                          type="text"
                          placeholder="Category"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, category: e.target.value });
                          }}
                        />
                      </div>
                      <div>
                        <div className="py-3 px-10">
                          <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                              setBody({ ...body, image: base64 })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn py-3  ml-10 my-4 w-40  border-red-400 rounded-3xl text-white border-2 "
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
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
}

export default AddProduct;
