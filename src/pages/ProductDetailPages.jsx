import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import SingleProductLoader from "../components/loaders/SingleProductLoader";

const ProductDetailPages = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [currentImages, setCurrentImages] = useState(null);
  const [loading, setloading] = useState(false);
  const priceAfterDiscount =
    singleProduct.price -
    (singleProduct.price * singleProduct.discountPercentage) / 100;
  let actualPrice = priceAfterDiscount.toFixed(0);

  useEffect(() => {
    async function getSingleProductDetails() {
      setloading(true);
      let response = await axios.get(
        `https://dummyjson.com/products/${productId.id}`
      );
      setSingleProduct(response.data);
      setloading(false);
    }
    getSingleProductDetails();
  }, [productId.id]);

  useEffect(() => {
    {
      setCurrentImages(singleProduct?.thumbnail);
    }
  }, [singleProduct?.thumbnail]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(singleProduct));
    toast(`${singleProduct.title} is added to cart`);
  };

  if (loading) {
    return <SingleProductLoader />;
  }

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="flex justify-around p-2 border-b-2">
        <h2 className="text-3xl font-bold text-gray-700">LG</h2>
        <h4 className="text-lg font-semibold">
          Work,play and go all day long with LG gram
        </h4>
        <h2 className="text-red-400 text-xl font-semibold">
          -18%{" "}
          <span className="text-red-700">
            <sup>$</sup>1,305<sup>50</sup>
          </span>
          <span className="text-xs line-through text-black">$1,599</span>
        </h2>
      </div>
      <section>
        <div className="flex justify-center p-5">
          <div className="flex p-4 gap-10 ">
            <div className="images h-96 flex flex-col gap-3">
              {singleProduct?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  onClick={() => setCurrentImages(item)}
                  className="size-20 cursor-pointer bg-gray-300 p-5 rounded-md"
                ></img>
              ))}
            </div>
            <div className="thumbnail" style={{ width: "500px" }}>
              <img
                src={currentImages}
                alt=""
                className="h-full w-full rounded-xl"
              />
            </div>
            <div className="detail leading-10">
              <p className="productTitle capitalize text-lg font-bold">
                {singleProduct.title}
              </p>
              <p
                className="info text-xl font-semibold"
                style={{ width: "300px" }}
              >
                {singleProduct.description}
              </p>
              <p className="discount">
                <span className="bg-red-700 p-1 text-white text-xs">
                  {" "}
                  {singleProduct.discountPercentage}% off
                </span>{" "}
                <span className="text-red-600">Limited time deal</span>
              </p>
              <p className="price font-semibold text-stone-700">
                Price: <span className="text-red-400">${actualPrice}</span>
              </p>
              <div className="flex justify-start items-center gap-2">
                {" "}
                <CiStar />
                {singleProduct.rating}
              </div>
              <p className="font-bold text-red-500">
                {singleProduct.stock < 1 ? "outofstock" : "In stock"}
              </p>
              <p className="bg-gray-500 w-14 px-1 text-white font-bold">
                {singleProduct.brand}
              </p>
              <p>Category: {singleProduct.category}</p>
            </div>
            <div className=" m-4 mx-10" style={{ width: "300px" }}>
              <div className="p-5">
                <button
                  className="bg-yellow-500 text-white w-full rounded-md font-bold h-10"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-5">
                <button className="bg-yellow-600 text-white w-full rounded-md font-bold h-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPages;
