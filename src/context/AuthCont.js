import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState();

  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const [commande, setCommande] = useState([]);

  const setUserData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const getUserData = () => {
    const userData = localStorage.getItem("userData");
    const parsed = JSON.parse(userData);
    return parsed;
  };
  const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const Login = async () => {
    setIsLoading(true);
    await axios
      .post("http://localhost:3001/users/login", userInfo)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setProfile(res?.data.find_user);
        setUserData(res?.data?.user);
        setToken(res?.data?.token);
        toast("connexion");
      })
      .catch((e) => {
        console.log(e?.response?.data);
        setIsLoading(false);
      });
  };

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  // code for orders
  const addCommande = (body) => {
    const newCommande = [...commande, body];
    setCommande(newCommande);
    console.log(commande);
  };
  const deleteCommandById = (itemId) => {
    const comandUpdate = commande.filter((item) => item.id !== itemId);
    setCommande(comandUpdate);
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedBasket = commande.map((item) => {
      if (item.id === itemId) {
        console.log(` itemid : ${itemId} quantity: ${newQuantity}`);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCommande(updatedBasket);
  };

  const makeOrder = async (userId, body) => {
    const totalPrice = body.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    const newBody = [...commande, totalPrice];
    console.log("total priceincludedd", commande);
    await axios
      .post(`http://localhost:3001/orders/make`, { userId, body })

      .then((res) => {
        const newOrder = res.data;

        //setCommande(newOrder);

        console.log(" votre commande-->", newOrder);
        //setcom(res.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("out of range");
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Request:", error.request);
        } else {
          // Something else happened in making the request that triggered an error
          console.log(" something else Error:", error.message);
        }
      });
  };

  //
  return (
    <Context.Provider
      value={{
        Login,
        setUserinfo,
        userInfo,
        isLoading,
        getUserData,
        getToken,
        setUserData,
        Logout,
        profile,
        setProfile,
        addCommande,
        commande,
        deleteCommandById,
        updateItemQuantity,
        makeOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
