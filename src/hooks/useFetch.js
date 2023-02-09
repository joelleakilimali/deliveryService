import { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "../config.js";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [user, setUser] = useState([]);

  const [loadingU, setLoadingU] = useState(false);
  const [errorU, setErrorU] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3001/products/");

        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingU(true);
      try {
        const res = await axios.get("http://localhost:3001/users/");

        setUser(res.data);
      } catch (err) {
        setError(err);
      }
      setLoadingU(false);
    };

    fetchData();
  }, [url]);
  return { data, loading, error, user, loadingU, errorU };
};
