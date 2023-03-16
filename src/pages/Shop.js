import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import Article from "../components/Article";
import Carte from "../components/Carte";
import Footer from "../components/Footer";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import Carousel from "carousel-react-rcdev";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("userData"));
console.log("userId:", user.id);
function Shop({ addOrderfunc }) {
  const [body, setBody] = useState({
    user: "63dfabe453a504ba92c09acf",
    products: "",
  });

  const createOrder = async () => {
    await axios
      .post("http://localhost:3001/orders/", body)
      .then((res) => {
        console.log(data);
        toast(
          res?.data,

          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      })
      .catch((e) => {
        toast(e);
      });
  };
  //console.log(user);
  const [test, setTest] = useState();
  let a = 1;
  let test2 = [];
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

        <div className="flex flex-row flex-wrap"></div>
        <div className="flex flex-wrap justify-center">
          {data?.products?.map((item, key = item._id) => (
            <div className="flex flex-row flex-wrap px-1 py-5 mx-1">
              <div className="article border-3 border-black  ">
                <div className=" flex flex-col centreColum">
                  <img src={item.image} alt="product img" className="w-[40%]" />
                  <h1 className="font-bold"> {item.name}</h1>
                  <h1>Prix: Fc {item.price}</h1>
                  <h1>Date expiration : {item.category}</h1>
                </div>
                <button
                  className="btnarticle  py-1  ml-2 my-4 w-24 bg-whitey  border-gray-300 text-black rounded-3xl  border-2  "
                  onClick={() => {
                    console.log("-->", item._id);
                    setBody({ ...body, products: item._id });
                    console.log("prd:", body);
                    createOrder();
                    //createOrder(item.id);
                  }}
                >
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Shop;
