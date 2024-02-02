import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import AdminMenu from "../components/AdminMenu/AdminMenu";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function AddProduct() {
  const addProduct = async () => {
    await axios
      .post("http://localhost:3001/products/", body)
      .then((res) => {
        console.log(res?.data?.message);
        toast(res?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const data = {
    name: "",
    price: "",
    dateExp: "",
    image: "",
  };

  const [body, setBody] = useState(data);
  console.log(body);

  return (
    <div className="flex flex-col ">
      <ToastContainer position="top-left" />

      <Navbar />
      <div className="  flex-1">
        <div className="flex  flex-col mt-20 ">
          <AdminMenu />
          <div className="flex justify-between mt-3 bg-gradient-to-r from-sky-900 to-red-900">
            <div className="px-5 text-white">
              <h2 className="font-bold text-3xl pt-5 ">
                Ajouter nouveaux produits
              </h2>
              <div
                style={{
                  color: "white",
                  gap: "2rem",
                  padding: "20px",
                }}
              >
                <Form
                  labelCol={{
                    span: 80,
                  }}
                  wrapperCol={{
                    span: 100,
                  }}
                  layout="horizontal"
                  initialValues={{
                    size: "",
                  }}
                  style={{
                    maxWidth: 800,
                    padding: "20px",
                  }}
                >
                  <Form.Item label="Nom">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Prix">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Super Marche">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Quantite">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Upload"
                    valuePropName="fileList"
                    // getValueFromEvent={normFile}
                  >
                    <Upload action="/upload.do" listType="picture-card">
                      <button
                        style={{
                          border: 0,
                          background: "none",
                        }}
                        type="button"
                      >
                        <PlusOutlined />
                        <div
                          style={{
                            marginTop: 8,
                          }}
                        >
                          Upload
                        </div>
                      </button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button>Enregistrer</Button>
                  </Form.Item>
                </Form>
              </div>
              {/* <div className="flex justify-evenly ">
                <div className="flex w-[100%] pt-3 ">
                  <div className="input ">
                    <div className="input">
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">
                          Nom du produit
                        </h5>
                        <input
                          type="text"
                          placeholder=" Nom du produit"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, name: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">Prix: </h5>
                        <input
                          type="text"
                          placeholder="Prix"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, price: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">
                          Date d'expiration
                        </h5>
                        <input
                          type="text"
                          placeholder="Date d'expiration"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, dateExp: e.target.value });
                          }}
                        />
                      </div>
                      <div className="  mx-8">
                        <h5 className="text-white text-xl p-2 ">Category </h5>
                        <input
                          type="text"
                          placeholder="Category"
                          className="p-2 mx-2 w-[300px] text-black"
                          onChange={(e) => {
                            setBody({ ...body, category: e.target.value });
                          }}
                        />
                      </div>
                      <div>
                        <div className="py-3 px-10">
                          <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                              setBody({ ...body, image: base64 })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn py-3  ml-10 my-4 w-40  border-red-400 rounded-3xl text-white border-2 "
                      onClick={addProduct}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12"></div>
      <Footer />
    </div>
  );
}

export default AddProduct;
