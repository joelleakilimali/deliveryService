import React from "react";

function Carte({ img, title }) {
  return (
    <div className="flex flex-col align-middle justify-center text-white  bg-gradient-to-t from-sky-900 to-red-900  w-[300px] border-3 border-sky-900 p-2 m-2">
      <div>
        <div className="flex flex-row justify-center">
          <img src={img} alt="imageMarket" className=" w-[200px]  " />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h1>{title}</h1>
      </div>
      <div className="flex flex-row justify-center"></div>
    </div>
  );
}

export default Carte;
