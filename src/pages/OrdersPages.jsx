import React, { PureComponent, useEffect, useState } from "react";
import axios from "axios";
import { DatePicker } from "antd";
import { Space, Table, Tag } from "antd";
import { Button, Flex } from "antd";

const OrdersPages = () => {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    async function getOrders() {
      let res = await axios.get("http://localhost:3000/orders");
      setOrders(res.data);
    }
    getOrders();
  }, []);

  const handleDelete = async (id) => {
    console.log("Deleting ordere", id);
    try {
      let res = await axios.delete(`http://localhost:3000/orders/${id}`);
      console.log(res);
      setOrders(Orders.filter((Order) => Order._id !== id));
    } catch (error) {
      console.log("Error deleting order:", error);
    }
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "products",
      key: "products",
      render: (_, { products }) => (
        <>
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col font-bold text-blue-500 m-4 gap-3"
              >
                <div>
                  {product.name}{" "}
                  <sup className="text-red-500 font-bold">
                    ({product.quantity})
                  </sup>{" "}
                </div>
                <div className="font-bold text-yellow-500 flex gap-2">
                  <p className="text-black">Price:</p> ${product.price}
                </div>
              </div>
            );
          })}
        </>
      ),
    },

    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Delete",
      render: (_, record) => (
        <Button
          onClick={() => handleDelete(record._id)}
          className="bg-red-500"
          type="primary"
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <DatePicker />
      <Table columns={columns} dataSource={Orders} />;
    </div>
  );
};

export default OrdersPages;
