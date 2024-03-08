import React from "react";

const SingleProductLoader = () => {
  return (
    <section>
      <div className="flex justify-center p-5">
        <div className="flex p-4 gap-10 ">
          <div className="images h-96 flex flex-col gap-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="size-20 cursor-pointer bg-gray-300 p-5 rounded-md animate-pulse"
              ></div>
            ))}
          </div>
          <div className="thumbnail bg-gray-300 h-96 w-96 rounded-xl animate-pulse"></div>
          <div className="detail leading-10">
            <div className="productTitle capitalize text-lg font-bold bg-gray-300 h-8 w-60 animate-pulse"></div>
            <div className="info text-xl font-semibold bg-gray-300 h-16 w-300 animate-pulse"></div>
            <div className="discount bg-gray-300 h-8 w-48 animate-pulse"></div>
            <div className="price font-semibold text-stone-700 bg-gray-300 h-8 w-32 animate-pulse"></div>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-gray-300 h-4 w-4 rounded-full animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-4 animate-pulse"></div>
            </div>
            <div className="font-bold text-red-500 bg-gray-300 h-8 w-32 animate-pulse"></div>
            <div className="bg-gray-300 h-6 w-14 animate-pulse"></div>
            <div className="bg-gray-300 h-6 animate-pulse"></div>
          </div>
          <div className=" m-4 mx-10" style={{ width: "300px" }}>
            <div className="p-5">
              <div className="bg-yellow-500 text-white w-full rounded-md font-bold h-10 animate-pulse"></div>
            </div>
            <div className="p-5">
              <div className="bg-yellow-600 text-white w-full rounded-md font-bold h-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductLoader;
