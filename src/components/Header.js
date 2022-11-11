import React from "react";
import { Link } from "react-router-dom";
import Wishlist from "../pages/Wishlist";
import {FaShoppingCart,FaHeart,FaUser,FaBars} from 'react-icons/fa'
import {AiOutlineClose} from "react-icons/ai"
 
export default function Header({ cartItem, wishlist }) {

  const[showBars,setShowBars]=React.useState(false)




  return (
    <header class=" sticky top-0 z-20">
    <div
      class="  top-0 flex  items-center bg-red-600 text-white shadow-md shadow-gray-600 w-full
       md:w-full md:justify-between md:m-0  md:flex py-4 h-20"
    >
     
      <div class="flex  text-2xl font-bold px-2 sm:tracking-wider ">
        <Link to="/">
          <img
            class="flex  bg-transparent rounded-3xl  "
            src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/HENRY/original.PNG?1627058942"
            width="50px"
          ></img>
          <span class="flex justify-center items-center text-base sm:text-md xl:text-xl">Henry Store</span>
        </Link>
      </div>

      <div class="sm:m-16 m-1 ">
        <ul class=
 
         {showBars?(" bg-white transition  ease-out  text-xl font-semibold scale-120 duration-3000 text-red-600 flex flex-col shadow-md  w-[180px] right-0 h-[600px] items-center space-y-6 absolute top-20 p-4  ")
         :(" hidden sm:flex  space-x-2 items-center justify-around text-md mt-6  sm:space-x-9  sm:text-lg xl:text-xl font-semibold ")}> 
       
  
          <li>
            <Link
              to="/"
              class="focus:bg-white focus:text-red-600 px-1 py-1 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              class="focus:bg-white focus:text-red-600 px-1 py-1 rounded-lg"
            >
              Shop
            </Link>
          </li>
       
          <li class="relative ">
            <Link
              to="/wishlist"
              class="  px-1 py-1 rounded-3xl"
            >
              <FaHeart/>
              <span class="absolute sm:top-2 top-3 -right-4 bg-white font-bold text-red-600 px-2 text-sm rounded-2xl">
                {wishlist.length}
              </span>
            </Link>
          </li>

       

          <li class="relative ">
            <Link
              to="/cart"
              class=" px-1 py-1 rounded-3xl "
            >
              <FaShoppingCart/>
              <span class="absolute sm:top-2 top-3 -right-4 bg-white font-bold text-red-600 px-2 text-sm rounded-2xl">
                {cartItem.length}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <FaUser/>
            </Link>
          </li>
        </ul>
        <div>
          <button class="ml-60 text-2xl" onClick={()=>setShowBars(!showBars)}> 
          {showBars?(<AiOutlineClose/>):(
          <FaBars className="sm:hidden"/>

          )} 
        </button>
        </div>
      </div>
    </div>
    </header>
  );
}
