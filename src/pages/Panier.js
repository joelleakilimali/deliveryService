import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carte from "../components/Carte";
import { useFetch } from "../hooks/useFetch";

function Panier() {
  let user = window.localStorage.getItem("userData");
  const userInfo = JSON.parse(user);

  // console.log(userInfo.lastName);

  const { order, loading, error } = useFetch("/orders");
  let comnd = order.orders;
  console.log(order.orders);

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Navbar />
          <div className=" flex-1  mt-24 bg-gradient-to-r from-sky-900 to-red-900">
            <div className=" flex  flex-col border-2 border-white  ">
              <div className="flex flex-row justify-between m-10 text-white">
                <div>
                  <div className="mx-5">Produits</div>
                </div>
                <div>
                  <div className="mx-5">Prix</div>
                </div>
                <div className="mx-5">
                  <div className="mx-5">
                    Quantites
                    <div className=" flex flex-col  pt-5">
                      <input type="number" />
                    </div>
                  </div>
                </div>
                <div className="mx-5">Total</div>
                <div>
                  {order?.orders?.map((item, key = item._id) => (
                    <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
                      <div className="w-[20%] px-5"></div>
                    </div>
                  ))}
                </div>
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
