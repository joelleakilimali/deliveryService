import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carte from "../components/Carte";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState, useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { ImWondering2 } from "react-icons/im";
import { Context } from "../context/AuthCont";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
function Panier() {
  const {
    getUserData,
    commande,
    deleteCommandById,
    updateItemQuantity,
    makeOrder,
  } = useContext(Context);
  const user = getUserData();
  const [com, setcom] = useState([]);

  useEffect(() => {}, [com]);
  const orde = async () => {
    await axios
      .post(`http://localhost:3001/orders/${user._id}`)
      .then((res) => {
        console.log("first");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(user);
  const WarningToast = ({ message }) => {
    return (
      <div className="flex flex-row items-center">
        <span className="material-icons mr-2 text-yellow-500">Attention </span>
        <span className="text-yellow-500">{message}</span>
      </div>
    );
  };
  const handleUpdateQuantity = (quantity, id) => {
    console.log(quantity);
    const newQuantity = quantity;
    updateItemQuantity(id, newQuantity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commande.length < 1) {
      toast.warning(<WarningToast message="panier vide " />, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        await makeOrder(user._id, { products: commande });
        toast.success("Payment effectuer !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "#2ecc71",
            color: "#fff",
            borderRadius: "10px",
            border: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          },
          toastClassName: "toast-sucess",
        });
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 500) {
          // Server error
          alert("Oops, something went wrong. Please try again later.");
        } else {
          // Other error
          alert("An error occurred. Please try again later.");
        }
      }
    }
  };

  const handleONSend = () => {
    if (commande.length < 1) {
      toast.warning(<WarningToast message="panier vide " />, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      //makeOrder(user._id, commande);
      toast.success("Payment effectuer !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: "#2ecc71",
          color: "#fff",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        },
        toastClassName: "toast-sucess",
      });
    }
  };

  const columns = [
    {
      title: "Produits",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Prix",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantités",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <div>
          <Button
            type="default"
            onClick={() => {
              record.quantity -= 1;
              handleUpdateQuantity(record.quantity - 1, record.id);
            }}
          >
            -
          </Button>
          <span>{record.quantity}</span>
          <Button
            type="default"
            onClick={() => {
              record.quantity += 1;
              handleUpdateQuantity(record.quantity + 1, record.id);
            }}
          >
            +
          </Button>
        </div>
      ),
    },
    {
      title: "Total",
      render: (text, record) => <span>{record.total * record.quantity}</span>,
    },
    {
      title: "Action",
      render: (text, record) => (
        <Button
          type="danger"
          icon={<DeleteOutlined />}
          onClick={() => {
            deleteCommandById(record.id);
          }}
        >
          Supprimer
        </Button>
      ),
    },
  ];
  const tableStyle = {
    background: "linear-gradient(to right, #0077FF, FF0000)", // Replace with your gradient colors
    color: "blue", // Text color
  };
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <Navbar />
          <ToastContainer />

          <div className="flex-1  mt-5  ">
            <div className="flex flex-col border-2 p-5">
              {commande.length === 0 ? (
                <div className="py-20 flex flex-col bg-gradient-to-r from-sky-900 to-red-900">
                  <h1 className="font-bold text-3xl text-white">
                    Aucune commande dans le panier
                  </h1>
                  <div className="p-5 flex">
                    <ImWondering2 size={80} color="white" />
                  </div>
                </div>
              ) : (
                <div style={{ gap: 5 }}>
                  <div className="text-xl text-black font-bold py-5 my-10">
                    Votre Facture
                  </div>
                  <Table
                    dataSource={commande}
                    columns={columns}
                    rowKey="id"
                    pagination={false}
                    style={tableStyle}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="my-5 mx-5">
            <h1 className="font-extrabold text-3xl">Mode de Payement </h1>
            <div className="flex flex-col my-5">
              <h1>Adresse de livraison </h1>
              <input
                type="text"
                placeholder="Commune , Quartier avenue , Ref "
                className="px-2 py-5 my-2 w-[700px] border-2 mr-9 border-blue-900"
              />
            </div>
            <div className="flex justify-end ">
              <div>
                <h1>Total : Fc 2500</h1>
                <h1 className=" border-b-2">Frais de livraison : Fc 2500</h1>
                <button
                  className=" border-green-600 border-2 bg-green-600 rounded-lg w-[200px] mt-3 text-white px-8 "
                  onClick={handleSubmit}
                >
                  Payer
                </button>
              </div>
            </div>
            <div className="flex  justify-start">
              <div className="w-[80px] mx-2">
                <img
                  src="./assets/airtelmoney.png"
                  alt="pymt"
                  className="w-[100px] mx-5 rounded-full "
                />
              </div>
              <div className="w-[80px]  mx-2">
                <img
                  src="./assets/orangemoney.png"
                  alt="pymt"
                  className="w-[100px]  mx-5 rounded-full "
                />
              </div>

              <div className="w-[80px]  mx-2">
                <img
                  src="./assets/afri.png"
                  alt="pymt"
                  className="w-[100px]  mx-5 rounded-full "
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Panier;
