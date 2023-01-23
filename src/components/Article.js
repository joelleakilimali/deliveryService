import React from "react";
import "./article.css";
function Article({ imag, prix, date }) {
  return (
    <div>
      <div>
        <div className="article border-3 border-black">
          <img src={imag} alt="productImage" className="w-[35%]" />
          <div className="detail">
            <h5 className="text-sm">Prix: ${prix}</h5>
            <h6 className="text-sm">Date d'expiration : {date}</h6>
          </div>
          <button className="btn py-1  ml-2 my-4 w-24 bg-sky-900 border-gray-400 rounded-3xl text-white border-2 ">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
