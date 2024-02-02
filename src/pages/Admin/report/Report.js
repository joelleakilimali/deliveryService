// ReportPage.js
import React, { useState, useEffect } from "react";
import { Form, Select, Table } from "antd";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Option } from "antd/es/mentions";

const shops = [
  {
    shop: "Shoprite",
    shopId: "f2345Fxsdefg",
    totalVente: 17890,
    totalCommand: 4,
    commandes: [
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
    ],
  },
  {
    shop: "City Market",
    shopId: "fx2345Fxsdefg",
    totalVente: 17890,
    totalCommand: 4,
    commandes: [
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
      {
        commandId: "df537767362sdhjd",
        totalPaid: 390,
        date: "23-06-2023",
        clientId: "ze123sggtttygf",
      },
    ],
  },
];

const ReportPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedShop, setSelectedShop] = useState("Shoprite");
  const selectedShopData = shops.find((shop) => shop.shop === selectedShop);
  const selectedMonthData =
    selectedShopData &&
    selectedShopData.commandes.filter((command) =>
      command.date.includes(selectedMonth)
    );
  const columns = [
    {
      title: "Command ID",
      dataIndex: "commandId",
      key: "commandId",
    },
    {
      title: "Total Paid",
      dataIndex: "totalPaid",
      key: "totalPaid",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Client ID",
      dataIndex: "clientId",
      key: "clientId",
    },
  ];
  return (
    <div>
      <Navbar />
      <div style={{ margin: "10rem 2rem" }}>
        <h2>Bilan mensuel</h2>

        <div>
          <Form>
            <div style={{ width: "50%" }}>
              <Form.Item label="Selectionner le Mois">
                <Select
                  onChange={(value) => setSelectedMonth(value)}
                  value={selectedMonth}
                >
                  <Option value="January">Janvier</Option>
                  {/* Add more months as needed */}
                </Select>
              </Form.Item>
              <Form.Item label="Selectionner le Super Marche">
                <Select
                  onChange={(value) => setSelectedShop(value)}
                  value={selectedShop}
                >
                  {shops.map((shop) => (
                    <Option key={shop.shopId} value={shop.shop}>
                      {shop.shop}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            {selectedMonthData && (
              <div style={{ marginTop: "2rem" }}>
                <h3>
                  Commandes pour {selectedShop} en {selectedMonth}
                </h3>
                <Table dataSource={selectedMonthData} columns={columns} />
              </div>
            )}
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
