import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";

const CartButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="group relative">
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
        <div
          onClick={() => setShowMenu(false)}
          className="closeBtn absolute -top-2 -right-2 border-2 border-white h-6 w-6 bg-red-500 rounded-full flex  items-center text-white cursor-pointer"
        >
          <IoIosClose className="text-4xl" />
        </div>
        <div className="heading space-y-3">
          <h3 className="text-xl font-bold uppercase text-gray-600 ">
            Shopping Cart
          </h3>
          <div className="items space-y-4  ">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="shadow-md  flex gap-3 border-gray-400 border-[1px] p-3 rounded-md"
                >
                  <div className="image">
                    {" "}
                    <img src={item.thumbnail} alt="" className="size-16" />
                  </div>
                  <div className="info">
                    <h2 className="text-purple-600">{item.title}</h2>
                    <p>
                      {item.price -
                        (item.price * item.discountPercentage) / 100}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>There is no items in the Cart</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
