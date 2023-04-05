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
  const addCommande = (body) => {
    const newCommande = [...commande, body];
    setCommande(newCommande);
    console.log(commande);
  };

  const deleteCommandById = (itemId) => {
    console.log(commande);
    const comandUpdate = commande.filter((item) => item.id !== itemId);
    console.log("new commande", comandUpdate);
    setCommande("--->", comandUpdate);
  };
  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedBasket = commande.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCommande(updatedBasket);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
