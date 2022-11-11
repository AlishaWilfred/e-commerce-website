import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../pages/data";
import { FiHeart } from "react-icons/fi";
import BreadCrumbs from "./BreadCrumbs";

export default function ProductDetails({ products,addToCart,addToWishlist }) {
  // let {title} =useParams()
  const { title } = useParams();
  const product = data.find((item) => item.title === title);
  const { image, category, price, discount, description } = product;
  const [Quantity,setQuantity]=useState(1)
const[imageIndex,setImageIndex]=useState(0)
//   const productMedia=[{
//     images:image
//   },{
//     images:img1
//   },
//   {
//     images:img2
//   },
//   {
//     images:img3
//   }
// ]

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
      <BreadCrumbs/>
      <div className="xl:m-16 bg-white hover:shadow-lg border md:m-6 flex justify-center items-center">
        {products
          .filter((item) => item.title === title)
          .map((item) => (
            <div key={item.id} className="flex md:flex-row flex-col md:grid md:grid-cols-2 gap-8 md:m-5 xl:m-10 p-4 xl:p-0">
              <div className="flex flex-col md:border-r ">
              <img src={image[imageIndex]} width="" className=" object-cover flex self-center mt-4 rounded-md w-full h-[300px] xl:w-[630px] xl:h-[380px] md:w-[300px] md:h-[300px] lg:[400px] lg:h-[320px]"></img>
              <div className="flex lg:m-4 sm:m-2  gap-3">
                {image.map((imag,i)=>(
                  <div className="flex  ">
                    <img src={imag} onMouseEnter={()=>setImageIndex(i)}  width="" height="" className={`rounded-md cursor-pointer w-[200px] h-[90px] md:w-[300px] md:h-[100px] lg:w-[150px] xl:h-[150px]  ${i===imageIndex?"border-2 border-blue-500":"border border-gray-100"}`}></img>
                  </div>
                ))}
          

                </div>
              </div>
              <div className=" xl:p-4 md:p-2">
                <span className="flex justify-between items-center">
                <h1 className="xl:text-3xl text-2xl font-medium text-gray-800">{title}</h1>

                <button className="lg:px-2 text-2xl cursor-pointer xl:mr-6 rounded-md hover:scale-105"> <FiHeart  onClick={()=>addToWishlist(item)}/></button>

                </span>
                <p className="mt-4">{(description)}</p>
                <span className="flex gap-4 items-center mt-4 text-red-600 text-xl font-semibold">
                  Rs.{price - (price * discount) / 100}
                  <span className="text-green-600 bg-green-100 px-2 text-sm font-normal">
                    {discount}% Off
                  </span>
                </span>

                <p className="line-through mt-1 text-gray-500 ">Rs.{price}</p>

                <div className="flex items-center mt-8 gap-6">
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
