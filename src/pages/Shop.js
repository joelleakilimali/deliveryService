import React from "react";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import Article from "../components/Article";

function Shop() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex mt-36 text-3xl justify-center">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Produits
          </h2>
        </div>

        <div className="flex flex-row flex-wrap">
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/nutella.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article imag="../assets/ph.jpg" date="10.06.2024" prix={10} />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/banana.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/cerelac.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article imag="../assets/omoo.jpg" date="10.06.2024" prix={10} />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/nutella.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/cerelac.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/banana.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article imag="../assets/ph.jpg" date="10.06.2024" prix={10} />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article
                imag="../assets/nutella.jpg"
                date="10.06.2024"
                prix={10}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article imag="../assets/omoo.jpg" date="10.06.2024" prix={10} />
            </div>
          </div>
          <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
            <div className="w-[20%] px-5">
              <Article imag="../assets/ph.jpg" date="10.06.2024" prix={10} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 text-3xl justify-center">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Categories
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Shop;
