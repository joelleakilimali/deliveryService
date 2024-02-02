import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

function AdminMenu() {
  const cardData = [
    { name: "Admin Panel", link: "/admin" },
    { name: "Ajouter Un Article", link: "/admin/addProduct" },
    { name: "Bilan", link: "/admin/report" },
  ];
  const gradientColors = ["#3490dc", "#ff4a4a"];
  return (
    <>
      <div
        style={{
          margin: "5rem 2rem",
          padding: "15px",
          gap: "2rem",
        }}
      >
        <Row gutter={[16, 16]} justify="center">
          {cardData.map((card, index) => (
            <Col key={index} span={8}>
              <Link to={card.link}>
                <Card
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 0 10px 2px",
                  }}
                  className="admin-box  font-semibold text-xl"
                  bordered
                >
                  <div>{card.name}</div>
                  {/* <h2 className="pt-2">
                        {index === 0 ? data.count : index === 1 ? "7" : "100"}
                      </h2> */}
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default AdminMenu;
