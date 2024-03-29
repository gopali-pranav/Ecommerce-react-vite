import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function ProductList() {
  const [products, setProducts] = useState([]);
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const isLoading = products.length === 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("API Response:", response.data);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.title} is added to cart`);
  };

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <h3 className="text-center font-bold p-4 text-3xl">Featured products</h3>
      <div className="grid gap-3 sm:gap-4 md:gap-5 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {isLoading
          ? // Loading Skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <div
                className="product leading-8 mx-4 px-4 shadow-xl animate-pulse"
                key={index}
              >
                <div className="h-20 bg-gray-300 rounded mb-4"></div>
                <div className="h-60 w-full bg-gray-300 rounded mb-4"></div>
                <div className="h-5 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="h-5 bg-gray-300 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="flex gap-60">
                  <div className="h-6 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-[80px] bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          : filteredProducts.map((product) => (
              <div
                className="product leading-8 mx-4 px-4 shadow-xl"
                key={product.id}
              >
                <p className="productTitle capitalize text-lg font-bold">
                  {product.title}
                </p>
                <div className="image flex justify-center">
                  <img src={product.thumbnail} alt="" className="h-60 w-full" />
                </div>
                <p className="info text-xl font-semibold">
                  {product.description}
                </p>
                <p className="discount">
                  <span className="bg-red-700 p-1 text-white text-xs">
                    {" "}
                    {product.discountPercentage}% off
                  </span>{" "}
                  <span className="text-red-600">Limited time deal</span>
                </p>
                <p className="price font-semibold text-stone-700">
                  Price:{" "}
                  <span className="text-red-400">
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(0)}
                  </span>
                </p>
                <div className="links flex gap-60  ">
                  <button className="text-sky-400 font-bold">
                    <Link to={`/${product.id}`}>See more...</Link>
                  </button>
                  <button className="text-sky-400 bg-yellow-400 text-white w-[80px] rounded-lg relative bottom-1">
                    <button onClick={() => handleAddToCart(product)}>
                      Cart
                    </button>
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ProductList;
