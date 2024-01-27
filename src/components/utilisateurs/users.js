import React, { useState } from "react";
import { Table, Drawer, Button, List, Typography } from "antd";
import { userDetails } from "./userDetails";
const { Text } = Typography;
const UsersPage = ({ userDetails }) => {
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

  const columns = [
    {
      title: "Id du client",
      dataIndex: "clientId",
      key: "clientId",
    },
    {
      title: "Nom du Client",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telephone",
      dataIndex: "contact",
      key: "Telephone",
    },
    {
      title: "Commande en cours",
      dataIndex: "pendingOrder",
      key: "pendingOrder",
    },

    {
      title: "Adresse Livraison",
      dataIndex: "adresseLivraison",
      key: "adresseLivraison",
    },

    {
      title: "Details",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => showDrawer(record)}
          style={{ backgroundColor: "#0C4A6E" }}
        >
          Voir Detail
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={userDetails} />
      {selectedCommand && (
        <Drawer
          title={`Client ID: ${selectedCommand.clientId}`}
          width={400}
          onClose={onClose}
          visible={visible}
        >
          <div>
            <div>
              <p style={{ padding: "10px 0 " }}>
                Client ID: {selectedCommand.clientId}
              </p>
              <p style={{ padding: "10px 0 " }}>
                Client Name: {selectedCommand.clientName}
              </p>
              <p style={{ padding: "10px 0 " }}>
                Contact: {selectedCommand.contact}
              </p>
              <p style={{ padding: "10px 0 " }}>
                Adresse de livraison : {selectedCommand.adresseLivraison}
              </p>
            </div>
            <div style={{ padding: "20px 0 " }}>
              Liste des commandes :{" "}
              <div>
                <List
                  dataSource={selectedCommand.detailsOrder}
                  renderItem={(product, index) => (
                    <List.Item>
                      <div>
                        <h4>{index + 1}.</h4>
                        <Text strong>{product.product}</Text>
                        <p>Super Marche: {product.shop}</p>
                        <p>CommandeId : {product.orderId}</p>

                        <p>Date : {product.orderDate}</p>
                        <p>Prix Total:{product.totalPrice}</p>
                      </div>
                    </List.Item>
                  )}
                />
                {/* {selectedCommand.products.map((product)=>{
                    <div>




                    </div>
                })} */}
              </div>
            </div>
            <div style={{ color: "green", fontSize: "17px" }}>
              Prix total : {selectedCommand.factureTotal}{" "}
            </div>
          </div>

          {/* Add more details as needed */}
        </Drawer>
      )}
    </>
  );
};

export default UsersPage;
