import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Admin() {
  const { data, loading, error } = useFetch("/products");
  const { user, loadingU, errorU } = useFetch("/users");
  console.log("---->>", user.message);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="flex  flex-col mt-20 ">
          <div className="mt-10 flex flex-row justify-center">
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5">
                  <h2>Produits</h2>

                  <h2 className="pt-2">{data.count}</h2>
                </div>
              </Link>
            </div>
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 ">
                  <div>commandes</div>
                  <h2 className="pt-2">100</h2>
                </div>
              </Link>
            </div>
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className="adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 ">
                  <div>Utilisateurs</div>
                  <h2 className="pt-2">100</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-20">
            <div className="px-5">
              <h2 className="font-bold text-3xl ">Produits disponible</h2>
              <div className="flex justify-between pt-3 ">
                <h2>Produit</h2>
                <h2>Prix</h2>
                <h2>Category</h2>
              </div>
              <div className="flex flex-col justify-between pt-5">
                {data?.products?.map((item, key = item._id) => (
                  <div className="flex flex-row justify-between">
                    <h1 className="p-1 uppercase text-sm">{item.name}</h1>
                    <h1 className="p-1 uppercase text-sm">{item.price}</h1>
                    <h1 className="p-1 uppercase text-sm ">{item.category}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-5">
              <h2 className="font-bold text-3xl ">Compte Utilisateurs</h2>
              <div className="flex justify-between pt-3 ">
                <h2>Noms</h2>
                <h2>email</h2>
                <h2>adress</h2>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <h2>justine</h2>
                <h2>justine@gmail.com</h2>
                <h2> kinshasa</h2>
              </div>
            </div>

            <div className="px-5">
              <h2 className="font-bold text-3xl "> commandes en cours</h2>
              <div className="flex justify-between pt-3 ">
                <h2>Nom</h2>
                <h2> Montant</h2>
              </div>
              <div className="flex flex-row justify-between pt-5">
                <h2>Justine </h2>
                <h2>56,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
}

export default Admin;
