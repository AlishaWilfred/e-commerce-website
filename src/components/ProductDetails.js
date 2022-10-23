import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../pages/data";

export default function ProductDetails({ products,addToCart,decreaseCartitem }) {
  // let {title} =useParams()
  const { title } = useParams();
  const product = data.find((item) => item.title === title);
  const { image, category, price, discount, description } = product;
  const [Quantity,setQuantity]=useState(1)

  const decreaseQty=()=>{
    if(Quantity>1){
        setQuantity(Quantity-1)
    }
  }
  const increaseQty=()=>{
    if(Quantity){
        setQuantity(Quantity+1)
    }
  }
  return (
    <div>
      <div className="xl:m-16 bg-white hover:shadow-lg flex justify-center items-center">
        {products
          .filter((item) => item.title === title)
          .map((item) => (
            <div key={item.id} className="flex md:flex-row flex-col gap-8 md:m-5 xl:m-10 p-4 xl:p-0">
              <img src={image} width="" className="rounded-xl w-full h-[300px] xl:w-[600px] xl:h-[500px] md:w-[300px] md:h-[300px] lg:[400px] lg:h-[320px]"></img>
              <div className=" xl:p-4 md:p-2">
                <h1 className="xl:text-3xl text-2xl font-medium text-gray-800">{title}</h1>
                <p className="mt-4">{(description)}</p>
                <span className="flex gap-4 items-center mt-4 text-red-600 text-xl font-semibold">
                  Rs.{price - (price * discount) / 100}
                  <span className="text-green-600 bg-green-100 px-2 text-sm font-normal">
                    {discount}% Off
                  </span>
                </span>

                <p className="line-through mt-1 text-gray-500 ">Rs.{price}</p>

                <div className="flex items-center mt-8">
                  {/* <div className="flex items-center gap-9">
                    <span onClick={decreaseQty} className="cursor-pointer bg-gray-200 px-2 rounded-md text-red-600 text-xl font-medium">-</span>
                    <span>{Quantity}</span>
                    <span onClick={increaseQty} className="cursor-pointer bg-gray-200 px-2 rounded-md text-red-600 text-xl font-medium">+</span>
                  </div> */}
                  <button onClick={()=>addToCart(item)} className="bg-red-600 text-white px-10 py-2 rounded-md hover:scale-105">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
