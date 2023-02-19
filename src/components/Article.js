import React from "react";
import "./article.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Article(props, { imag, prix, date, title }) {
  const [body, setBody] = useState();

  let a;
  const addOrders = () => {
    a = props.addOrder();
    setBody({ ...body, a });
    console.log(body);
    createOrder(a);
  };

  const createOrder = async () => {
    await axios
      .post("http://localhost:3001/orders/", body)
      .then((res) => {
        toast(res?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((e) => {
        toast(e);
      });
  };

  return (
    <div>
      <div>
        <div className="article border-3 border-black">
          <img src={imag} alt="productImage" className=" w-[45%]" />
          <div className="detail">
            <h5 className="text-sm">Prix: $ {prix}</h5>
            <h6 className="text-sm">Date d'expiration : {date}</h6>
            <h6>produit: {title}</h6>
          </div>
          <button
            className="btnarticle  py-1  ml-2 my-4 w-24 bg-whitey  border-gray-300 text-black rounded-3xl  border-2  "
            onClick={addOrders}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
