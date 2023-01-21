import React from "react";

function Box({ img, title, text }) {
  return (
    <div className="flex flex-col align-middle justify-center text-white  bg-gradient-to-t from-sky-900 to-red-900  w-[300px] border-3 border-sky-900 p-2 m-2">
      <div>
        <div className="flex flex-row justify-center">
          <img src={img} alt="imageMarket" className=" w-[200px]  " />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="flex flex-row justify-center">
        <button className=" btn btn py-3  ml-3 my-4 w-32  bg-sky-900 border-red-400 rounded-3xl text-white border-2">
          Produits
        </button>
      </div>
    </div>
  );
}

export default Box;
