import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carte from "../components/Carte";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
function Panier() {
  let user = window.localStorage.getItem("userData");
  const userInfo = JSON.parse(user);
  let a = 1;
  // console.log(userInfo.lastName);
  const [quantity, setQuantity] = useState(1);
  const [itemDelete, setitemDelete] = useState();
  const { order, loading, error } = useFetch("/orders");
  let comnd = order.orders;
  const funct = () => {
    order?.orders?.map((item, key = item._id) => {
      console.log("-->", item.quantity);
      console.log("-->", item.product.price);
      console.log("-->", item.product.name);
    });
  };

  const deleteItem = async () => {
    console.log(itemDelete);
    await axios
      .post(`http://localhost:3001/orders/${itemDelete}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Navbar />
          <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
            <div className=" flex  flex-col border-2 border-white  ">
              <div className="flex flex-row justify-between mx-10 mt-10 text-white">
                <div>
                  <div className="mx-5 border-y-2">Produits</div>
                </div>
                <div>
                  <div className="mx-5  border-y-2">Prix</div>
                </div>
                <div>
                  <div className="mx-5  border-y-2">Quantites</div>
                </div>
                <div className="mx-5  border-y-2">Total</div>
              </div>
              <div className="flex flex-col justify-between mx-10 text-white">
                {order?.orders?.map((item, key = item._id) => (
                  <div className="flex flex-row flex-wrap px-1 py-5 mx-2 ">
                    <div className=" flex flex-row justify-between   w-[70%] mr-24 pe-5">
                      <div className="centerRow">
                        <AiOutlineDelete
                          className=" mx-1"
                          onClick={() => {
                            setitemDelete(item.product._id);
                            deleteItem();
                          }}
                        />
                        <h1 className="text-white ">{item.product.name}</h1>
                      </div>
                      <div>
                        <h1 className="text-white">{item.product.price}</h1>
                      </div>
                      <div className="flex">
                        <button
                          onClick={() => {
                            item.quantity--;
                            a = item.quantity;
                            console.log(item.quantity);
                          }}
                          className="border-[0.10px] rounded-lg border-x-gray-300 px-2 text-red-600 font-extrabold text-lg"
                        >
                          -
                        </button>
                        <h1 className="text-white mx-5">{a}</h1>
                        <button
                          onClick={() => {
                            item.quantity++;
                            console.log(item.quantity);
                          }}
                          className="border-[0.10px] rounded-lg border-x-gray-300 px-1 text-green-600 font-extrabold text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="font-extrabold text-3xl">Mode de Payement </h1>
            <div className="flex justify-end ">
              <div>
                <h1>Total : Fc 2500</h1>
                <h1 className=" border-b-2">Frais de livraison : Fc 2500</h1>
                <button className=" border-green-600 border-2 bg-green-600 rounded-lg w-[200px] mt-3 text-white px-8 ">
                  Payer
                </button>
              </div>
            </div>
            <div className="flex  justify-start">
              <div className="w-[80px] mx-2">
                <img
                  src="./assets/airtelmoney.png"
                  alt="pymt"
                  className="w-[100px] mx-5 rounded-full "
                />
              </div>
              <div className="w-[80px]  mx-2">
                <img
                  src="./assets/orangemoney.png"
                  alt="pymt"
                  className="w-[100px]  mx-5 rounded-full "
                />
              </div>

              <div className="w-[80px]  mx-2">
                <img
                  src="./assets/afri.png"
                  alt="pymt"
                  className="w-[100px]  mx-5 rounded-full "
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Panier;
