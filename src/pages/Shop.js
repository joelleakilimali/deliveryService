import React from "react";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import Article from "../components/Article";
import Carte from "../components/Carte";

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
        {}
        <div>
          <div className="flex mt-16 text-3xl justify-center">
            <h2 className=" bg-blue-400 rounded-xl text-white p-3">
              Les Produits
            </h2>
          </div>
        </div>
        <div className="flex  flex-row">
          <div className="flex flex-row flex-wrap">
            <Carte img="./assets/viande.jpg" title="Boucheries" />
          </div>
          <div className="flex flex-row flex-wrap">
            <Carte img="./assets/patisseries.jpg" title="Patisseries" />
          </div>
          <div className="flex flex-row flex-wrap">
            <Carte img="./assets/jus.jpeg" title="Jus de fruits" />
          </div>
        </div>
        {}
      </div>
    </div>
  );
}

export default Shop;
