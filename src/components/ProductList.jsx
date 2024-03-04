import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);
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

  return (
    <div>
      <h3 className="text-center font-bold p-4 text-3xl">Featured products</h3>
      <div className="grid gap-3 sm:gap-4 md:gap-5 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
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
                Price: <span className="text-red-400">${product.price}</span>
              </p>
              <button className="text-sky-400 font-bold">
                <Link to={`/${product.id}`}>See more...</Link>
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
