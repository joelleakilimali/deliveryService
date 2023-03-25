import axios from "axios";
import React, { createContext, useState } from "react";
//import { useHistory } from "react-router-dom";
//import { Notifications } from "../components";
//import { BASE_URL } from "../Config";
//import { ISignin, iUser } from "../interfaces";
//import { Routes } from "../routes";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState();

  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  //const history = useHistory();

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
        // history.replace(Routes.FEED.path);
      })
      .catch((e) => {
        console.log(e?.response?.data);
        setIsLoading(false);
        // Notifications("error", e?.response?.data?.message, 5000, "top-right");
      });
  };

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    // history.replace(Routes.SIGNIN.path);
  };

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
