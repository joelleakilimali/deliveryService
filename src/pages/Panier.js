import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carte from "../components/Carte";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState, useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { ImWondering2 } from "react-icons/im";
import { Context } from "../context/AuthCont";

function Panier() {
  const {
    getUserData,
    commande,
    deleteCommandById,
    updateItemQuantity,
    profile,
  } = useContext(Context);
  const user = getUserData();
  const [quantity, setQuantity] = useState(1);
  const [itemDelete, setitemDelete] = useState();
  const [com, setcom] = useState([]);
  const [products] = commande;
  useEffect(() => {}, [com]);
  const orde = async () => {
    await axios
      .post(`http://localhost:3001/orders/${user._id}`)
      .then((res) => {
        setcom(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleUpdateQuantity = (quantity, id) => {
    const newQuantity = quantity;
    updateItemQuantity(id, newQuantity);
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
              {commande < 1 ? (
                <div className="p-40 flex  flex-col">
                  <h1 className="font-bold text-3xl text-white">
                    Aucune commande dans le panier
                  </h1>
                  <div className="p-5 flex ">
                    <ImWondering2 size={80} color="white" />

                    <button
                      onClick={orde}
                      className=" text-white text-lg font-bold mx-5 bg-blue-600 rounded-lg "
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between mx-10 text-white">
                  {commande.map((item) => (
                    <div key={item.id}>
                      <div className="flex flex-row flex-wrap px-1 py-5 mx-2  justify-between">
                        <div className="flex flex-row items-center w-[80px]">
                          <div className="centerRow">
                            <AiOutlineDelete
                              size={20}
                              color="red"
                              className=" mx-1"
                              onClick={() => {
                                deleteCommandById(item.id);
                              }}
                            />
                            <h1 className="text-white w-[40px]">
                              {" "}
                              {item?.name}
                            </h1>
                          </div>
                        </div>
                        <div>
                          <h1 className="text-white "> {item?.price}</h1>
                        </div>
                        <div className="flex">
                          <button className="border-[0.10px] rounded-lg border-x-gray-300 px-2 text-red-600 font-extrabold text-lg">
                            -
                          </button>
                          <h1 className="text-white ">{item?.quantity}</h1>
                          <button
                            onClick={() => {
                              handleUpdateQuantity(item.quantity + 1, item._id);
                            }}
                            className="border-[0.10px] rounded-lg border-x-gray-300 px-1 text-green-600 font-extrabold text-lg"
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <h1>{item.total * item.quantity}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="my-5 mx-5">
            <h1 className="font-extrabold text-3xl">Mode de Payement </h1>
            <div className="flex flex-col my-5">
              <h1>Adresse de livraison </h1>
              <input
                type="text"
                placeholder="Commune , Quartier avenue , Ref "
                className="px-2 py-5 my-2 w-[700px] border-2 mr-9 border-blue-900"
              />
            </div>
            <div className="flex justify-end ">
              <div>
                <h1>Total : Fc 2500</h1>
                <h1 className=" border-b-2">Frais de livraison : Fc 2500</h1>
                <button
                  className=" border-green-600 border-2 bg-green-600 rounded-lg w-[200px] mt-3 text-white px-8 "
                  onClick={() => {
                    alert("payement effectuer");
                  }}
                >
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
