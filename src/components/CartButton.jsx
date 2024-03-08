import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const CartButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="group relative ">
      <button
        className="cartIcon text-3xl relative left-20 text-purple-400 "
        onClick={() => setShowMenu(true)}
      >
        <FaCartShopping />
        <div className="counter text-sm absolute -top-2 left-4 text-red-400 font-semibold bg-red-500 text-white w-6 text-center rounded-md ">
          {cartItems.length}
        </div>
      </button>
      <div
        className={`cartItems w-96 absolute top-15 -right-16 rounded-md shadow-md z-50 bg-white border-[1px] border-gray-300 p-5 ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="closeBtn absolute -top-2 -right-2 border-2 border-white h-6 w-6 bg-red-500 rounded-full flex  items-center text-white cursor-pointer"
        >
          <IoIosClose className="text-4xl" />
        </button>
        <div className="heading flex justify-between">
          <h3 className="text-xl font-bold uppercase text-gray-600 mb-3">
            Shopping Cart
          </h3>
          <div className="totalPrice h-6 text-gray-600 font-bold ">
            <span className="text-red-400">Total :</span> $
            {cartItems.reduce(
              (acc, item) =>
                acc +
                Math.ceil(
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
                className="shadow-md relative flex gap-3 border-gray-400 border-[1px] p-3 rounded-md"
              >
                <div className="image">
                  {" "}
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-16 bg-gray-200 rounded-lg p-2 object-cover"
                  />
                </div>
                <div className="info">
                  <h2 className="text-purple-600">
                    {item.title} ({item.quantity})
                  </h2>
                  <p>
                    $
                    {(
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                      item.quantity
                    ).toFixed(0)}
                  </p>
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
          <Link to={"/cart"} onClick={() => setShowMenu(false)}>
            <button className=" bg-purple-500 rounded-md p-2 text-white font-bold">
              Go to Cart
            </button>
          </Link>
          <Link to={"/checkout"}>
            <button className="bg-purple-500 rounded-md p-2 text-white font-bold">
              Checkout Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
