import React, { useState } from "react";
import { Table, Drawer, Button, List, Typography } from "antd";
const { Text } = Typography;

const CommandTable = ({ commandList }) => {
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
      title: "Commande Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Client Id",
      dataIndex: "clientId",
      key: "clientId",
    },
    {
      title: "Nom du client",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Contact du client",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Facture total commande",
      dataIndex: "factureTotal",
      key: "factureTotal",
    },
    {
      title: "Super Marche",
      dataIndex: "market",
      key: "market",
    },

    {
      title: "Adresse Livraison",
      dataIndex: "adresseLivraison",
      key: "adresseLivraison",
    },

    {
      title: "Apercu global",
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
      <Table columns={columns} dataSource={commandList} />
      {selectedCommand && (
        <Drawer
          title={`Commande ID: ${selectedCommand.id}`}
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
              <p style={{ padding: "10px 0 " }}>
                Super Marche: {selectedCommand.market}
              </p>
            </div>
            <div style={{ padding: "20px 0 " }}>
              Liste des produits :{" "}
              <div>
                <List
                  dataSource={selectedCommand.products}
                  renderItem={(product) => (
                    <List.Item>
                      <div>
                        <Text strong>{product.product}</Text>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total Price: {product.totalPrice}</p>
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

export default CommandTable;
