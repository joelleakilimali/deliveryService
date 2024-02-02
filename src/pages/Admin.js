import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Table, Drawer, Button } from "antd";
import {
  adminTab,
  commandListShop,
  commandTableColumns,
  productsListShop,
  productsTableColumns,
} from "../data/products";
import { Tabs } from "antd";
import CommandTable from "../components/commandes/CommandeDetails";
import UsersPage from "../components/utilisateurs/users";
import { userDetails } from "../components/utilisateurs/userDetails";
import AdminMenu from "../components/AdminMenu/AdminMenu";

function Admin() {
  const { data, loading, error } = useFetch("/products");
  const { user, loadingU, errorU } = useFetch("/users");
  console.log("---->>", user.message);
  let productItems = productsListShop;

  const [visible, setVisible] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState(null);

  const showDrawer = (record) => {
    setVisible(true);
    setSelectedCommand(record);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedCommand(null);
  };

  const adminTab = [
    {
      key: "1",
      label: "Produiits",
      children: (
        <div>
          <Table columns={productsTableColumns} dataSource={productsListShop} />
        </div>
      ),
    },
    {
      key: "2",
      label: "Commandes en cours ",
      _children: (
        <div>
          <CommandTable commandList={commandListShop} />
        </div>
      ),
      get children() {
        return this._children;
      },
      set children(value) {
        this._children = value;
      },
    },
    {
      key: "3",
      label: "Comptes utilisateurs",
      _children: (
        <div>
          <UsersPage userDetails={userDetails} />
        </div>
      ),
      get children() {
        return this._children;
      },
      set children(value) {
        this._children = value;
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="">
        <div className="flex  flex-col mt-20 ">
          <AdminMenu />
          {/* <div className="mt-10 flex flex-row justify-center">
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5">
                  <h2>Ajouter Un Article</h2>

                  <h2 className="pt-2">{data.count}</h2>
                </div>
              </Link>
            </div>
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className=" adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 ">
                  <div>Super Marché</div>
                  <h2 className="pt-2">7</h2>
                </div>
              </Link>
            </div>
            <div className="w-80">
              <Link to="/admin/addProduct">
                <div className="adminbox flex flex-col  border-2  border-gray-100 p-5 m-5 ">
                  <div>Bilan</div>
                  <h2 className="pt-2">100</h2>
                </div>
              </Link>
            </div>
          </div> */}
          <Tabs defaultActiveKey="1" items={adminTab} />

          {/* <div className="px-5">
              <h2 className="font-bold text-3xl ">Produits disponible</h2>
              <div className="flex justify-between pt-3 ">
                <h2>Produit</h2>
                <h2 className="mx-10">Prix</h2>
                <h2>Category</h2>
              </div>
              <div className="flex flex-col justify-between pt-5">
                {data?.products?.map((item, key = item._id) => (
                  <div className="flex flex-row justify-between ">
                    <div className="">
                      <h1 className="p-2 uppercase text-sm w-[50px]  ">
                        {item.name}
                      </h1>
                    </div>
                    <div>
                      <h1 className="p-1 uppercase text-sm mx-14 w-[30px]">
                        {item.price}
                      </h1>
                    </div>
                    <div>
                      <h1 className="p-1 uppercase text-sm  w-[30px]">
                        {item.category}
                      </h1>
                    </div>
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
            </div> */}
        </div>
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
}

export default Admin;
