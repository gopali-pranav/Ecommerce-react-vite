import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { increaseQuantity } from "../redux/cartSlice";
import axios from "axios";
import toast from "react-hot-toast";

const CartButton = () => {
  const [loading, setloading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOrder = async () => {
    try {
      const totalAmount = Math.ceil(
        cartItems.reduce(
          (acc, item) =>
            acc +
            (item.price - (item.price * item.discountPercentage) / 100) *
              item.quantity,
          0
        )
      );
      const products = cartItems.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: Math.round(
          item.price - (item.price * item.discountPercentage) / 100
        ),
      }));
      const sendingData = {
        totalAmount,
        products,
      };

      const response = await axios.post(
        "http://localhost:3000/orders",
        sendingData
      );
      console.log(response.data);
      if (response.data) {
        toast("Order has been placed successfully");
      } else {
        console.error("Unexpected response status:", response.status);
        toast("Failed to palce order. Please try again later.");
      }
      dispatch(clearCart());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="group ">
      <div
        className={`cartItems rounded-md shadow-md z-50 bg-white border-[1px] border-gray-300 p-5`}
      >
        <div className="heading flex justify-between">
          <h3 className="text-xl font-bold uppercase text-gray-600 mb-3">
            Shopping Cart
          </h3>
          <div className="totalPrice h-6 text-gray-600 font-bold ">
            <span className="text-red-400">Total :</span> $
            {cartItems.reduce(
              (acc, item) =>
                acc +
                Math.round(
                  (item.price - (item.price * item.discountPercentage) / 100) *
                    item.quantity
                ),
              0
            )}
          </div>
        </div>
        <div className="items space-y-3 max-h-96 overflow-scroll overflow-x-hidden p-3 ">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="shadow-md relative flex gap-5 border-gray-400 border-[1px] p-4 rounded-md"
              >
                <div className="image">
                  {" "}
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-20 bg-gray-200 rounded-lg p-2 object-cover"
                  />
                </div>
                <div className="info w-full">
                  <h2 className="text-purple-600">
                    {item.title} (
                    {item.quantity > 1
                      ? `${item.quantity}items`
                      : `${item.quantity}item`}
                    )
                  </h2>
                  <p>
                    $
                    {Math.round(
                      item.price - (item.price * item.discountPercentage) / 100
                    ) * item.quantity}
                  </p>
                </div>

                <div className="updateQuantity flex flex-col gap-5 absolute top-6 right-8 text-lg item-center justify-center">
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-blue-700 rounded-full h-6 w-6 flex items-center justify-center text-white "
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-red-700 rounded-full h-6 w-6 flex items-center justify-center text-white"
                  >
                    <FaMinus />
                  </button>
                </div>

                <button
                  className="deleteItem absolute -top-2 -right-2 text-white font-bold h-6 w-6 flex items-center justify-center rounded-full bg-red-700 "
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <AiFillDelete />
                </button>
              </div>
            ))
          ) : (
            <div>There is no items in the Cart</div>
          )}
        </div>
        <div className="action space-x-20 mt-5 p-2 ml-1">
          <button
            className="bg-purple-500 rounded-md p-2 text-white font-bold"
            onClick={handleOrder}
          >
            {loading ? "Sending Order..." : "Send Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
