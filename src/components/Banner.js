import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <div class=" relative  sm:h-[500px] md:flex md:flex-col md:justify-center   lg:flex lg:flex-row lg:justify-center sm:items-center w-fit sm:w-full ">
    <img
      class=" h-[100%] object-cover w-[100%] opacity-80 "
      src="https://cdn.pixabay.com/photo/2016/03/21/21/20/nike-1271624__340.jpg"
    
    ></img>
    <div class="sm:absolute">
      <div class="mt-12 md:justify-center md:items-center md:mt-12 flex flex-col justify-center">
        <h1 class="sm:text-7xl font-bold md:justify-center text-4xl flex justify-center ">
          NIKE
        </h1>
      
      </div>

      <div class=" flex justify-center md:text-xl text-lg text-center sm:text-xl  font-semibold space-x-1 sm:tracking-widest mt-6">
        <p class="flex "> Where all </p>
        <p> Athletes Belong</p>
      </div>
      <div class=" flex justify-center text-center sm:flex-col mt-6 text-lg tracking-wide">
        <p class="flex flex-col m-2">
          Get first and exclusive access to the newest style and innovation,
          <p class="">free shipping , Birthday rewards and more.</p>
        </p>
      </div>
      <div class="mt-12 flex justify-center ">
        <button class="bg-red-600 text-white px-4 py-3 font-bold rounded-lg border-none cursor-pointer
        hover:bg-white hover:border-2 hover:border-red-600 ">
          <Link to="/products" class=" hover:text-red-900 ">
          Buy Now
          </Link> 
        </button>
      </div>
    </div>
    </div>
  )
}
