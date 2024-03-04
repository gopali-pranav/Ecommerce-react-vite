import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [carts, setCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://dummyjson.com/carts");
      console.log(res.data);
      setCart(res.data.carts);
    };
    fetchData();
  }, []);
  return (
    <div>
      {carts.map((cart) => (
        <div key={cart.id}>
          <p>
            the title is:{" "}
            {cart?.products?.map((items) => (
              <div>
                <p>{items.title}</p>
                <img src={items.thumbnail} alt="" />
              </div>
            ))}
          </p>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
