import React from "react";
import "./article.css";
function Article({ imag, prix, date, title }) {
  return (
    <div>
      <div>
        <div className="article border-3 border-black">
          <img src={imag} alt="productImage" className="w-[35%]" />
          <div className="detail">
            <h5 className="text-sm">Prix: ${prix}</h5>
            <h6 className="text-sm">Date d'expiration : {date}</h6>
            <h6>{title}</h6>
          </div>
          <button className="btnarticle  py-1  ml-2 my-4 w-24 bg-whitey  border-gray-300 text-black rounded-3xl  border-2  ">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
