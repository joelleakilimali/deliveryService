import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import Article from "../components/Article";
import Carte from "../components/Carte";
import Footer from "../components/Footer";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import Carousel from "carousel-react-rcdev";

function Shop() {
  const lisProduct = [
    {
      name: "Boisson",
      img: "./assets/jus.jpeg",
    },
    {
      name: "Patisserie",
      img: "./assets/patisseries.jpg",
    },
    {
      name: "Boucheries",
      img: "./assets/viande.jpg",
    },
    {
      name: "Parfumeries",
      img: "./assets/deo.jpg",
    },
    {
      name: "Boisson",
      img: "./assets/jus.jpeg",
    },
    {
      name: "Patisserie",
      img: "./assets/patisseries.jpg",
    },
    {
      name: "Boucheries",
      img: "./assets/viande.jpg",
    },
    {
      name: "Parfumeries",
      img: "./assets/deo.jpg",
    },
  ];

  const { data, loading, error } = useFetch("/products");
  console.log(data);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios
          .get("http://localhost:3001/products/")
          .then((res) => {
            console.log(res.data?.products);
          });
      } catch (err) {}
    };
    fetchProduct();
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div className="flex mt-12 text-3xl justify-center pt-20">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Categories
          </h2>
        </div>
      </div>
      <div>
        <Carousel>
          <div className="flex flex-row">
            {lisProduct?.map((item, key = item._id) => (
              <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
                <div className="w-[10%] px-1">
                  <Carte title={item.name} img={item?.img} />
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      </div>

      <div>
        <div className="flex mt-20 text-3xl justify-center">
          <h2 className=" bg-blue-400 rounded-xl text-white p-3">
            Les Produits
          </h2>
        </div>

        <div className="flex flex-row flex-wrap">
          <>
            {data?.products?.map((item, key = item._id) => (
              <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
                <div className="w-[20%] px-5">
                  <Article
                    imag={item.image}
                    date={item.category}
                    prix={item.price}
                  />
                </div>
              </div>
            ))}
          </>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Shop;
