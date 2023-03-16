import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./home.css";

import Box from "../components/Box";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className="flex  flex-row  align-middle mt-24  bg-gradient-to-r from-sky-900 to-red-900">
        <div className="flex flex-col  text-white bg-scroll mt-2 p-8">
          <p className=" mt-[90px] ml-3  font-bold text-[45px] w-[800px]">
            J'S Market offre un service de Livraison À Domicile fiable et de
            qualité.
          </p>
          <p className=" w-[500px]  ml-3 text-lg">
            Nous vous livrons les produits du super-marché. N'hésitez pas de
            nous contacter. Nous sommes à votre service
          </p>
          <button className="btn py-3  ml-3 my-4 w-40  border-red-400 rounded-3xl text-white border-2 ">
            Contactez-nous
          </button>
        </div>
        <div
          className="w-[450px] mt-28 mr-5 rounded-3xl "
          style={{
            backgroundImage: "url(./assets/Capture.PNG)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>

      <div className="mt-10">
        <div className="flex  flex-col justify-center">
          <div className="flex  mt-3 text-3xl justify-center">
            <h2 className=" bg-blue-400 rounded-xl text-white p-3">
              Les Super-Marchés
            </h2>
          </div>
          <div className=" box px-10 py-5 mx-5">
            <div className="  innerBox">
              <Box
                img="../assets/kin-marché.png"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div className=" innerBox">
              <Box
                img="../assets/kin-mart.png"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div className=" innerBox">
              <Box
                img="../assets/ggmatt.jfif"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>

            <div className=" innerBox">
              <Box
                img="../assets/city-market.png"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div className="innerBox">
              <Box
                img="../assets/kin-mart.png"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <Link to="/supermarche">
              <div className="innerBox">
                <Box
                  img="../assets/city-market.png"
                  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  flex-col ">
        <div className="flex mt-3 text-3xl justify-center">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Nouveautes
          </h2>
        </div>
        <span className="flex justify-between flex-wrap px-10 py-5 mx-5  bg-gradient-to-r from-sky-900 to-red-900 ">
          <div className="border-2 border-gray-200 w-[500px]">
            <div className="  flex flex-col p-3  text-white">
              <div>
                <img src="./assets/omo.jpg" alt="" className="w-[100%]" />
              </div>
              <div className=" detailnews  p-3 ">
                <div className=" flex flex-row  ">
                  <FaUserAlt className="mt-1" />
                  <h5 className=" mx-2 ">Par Justine</h5>
                </div>
                <div
                  div
                  className=" flex flex-row align-middle justify-center "
                >
                  <AiFillCalendar className="mt-1" />
                  <h5 className=" mx-2 ">02 Janvier 2023</h5>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="py-5 text-lg font-bold ">
                    Les Produits Masavco
                  </h1>
                  <p className="">
                    To summarize, in botany, a fruit is the result of the
                    transformation of the pistil of flower plants, while the
                    vegetable is a part of the edible plant
                  </p>
                  <button className="btn py-3  ml-3 my-4 w-40  border-gray-400 rounded-3xl text-white border-2 ">
                    Lire Plus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-200  w-[500px]">
            <div className="  flex flex-col p-3 text-white ">
              <div>
                <img src="./assets/fruits.jpg" alt="" className="w-[100%]" />
              </div>
              <div className=" detailnews  p-3 ">
                <div className=" flex flex-row  ">
                  <FaUserAlt className=" mt-1 " />
                  <h5 className=" mx-2 ">Par Justine</h5>
                </div>
                <div div className=" flex flex-row ">
                  <AiFillCalendar className=" mt-1 " />
                  <h5 className=" mx-2 ">02 Janvier 2023</h5>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="py-5 text-lg font-bold ">
                    Les Fruits et Legumes
                  </h1>
                  <p className="">
                    To summarize, in botany, a fruit is the result of the
                    transformation of the pistil of flower plants, while the
                    vegetable is a part of the edible plant.thank you
                  </p>
                  <button className="btn py-3  ml-3 my-4 w-40  border-gray-400 rounded-3xl text-white border-2 ">
                    Lire Plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
