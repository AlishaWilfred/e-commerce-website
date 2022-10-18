import React from 'react'
import {Link} from "react-router-dom"
import Product from './Product'
import {AiOutlineArrowLeft,AiOutlineClose} from "react-icons/ai"
import toast, { Toaster } from 'react-hot-toast'

export default function Wishlist({wishlist,addToCart,setWishlist}) {

    const removeWishlist=(product)=>{
        setWishlist(wishlist.filter(item=>item.id!=product.id))
        toast.error("item removed from the wishlist")
    }



  return (
    <>
    <div>
        <div class="sm:m-6  sm:px-2 m-2">
            <button ><Link to="/products"><span className='flex items-center hover:text-blue-500 hover:underline'>  <AiOutlineArrowLeft/> <span class="ml-3"> Back to shop</span></span></Link></button>
        </div>
        {
            wishlist.length===0?(
                <div class="flex flex-col justify-center items-center space-y-5 mt-12 ">
                    <div>
                        <img src="https://i0.wp.com/blacksmithcustomknives.com/wp-content/themes/buscom/assets/img/empty-wishlist.png?w=640&ssl=1"></img>
                        </div>
                    <h1 class="text-2xl font-bold tracking-wider">Your Wishlist is Emptyy!!</h1>
                    <p class="text-lg text-gray-600 mb-6">Explore more and shortlist some items.</p>
                    <div>
                        <button class="px-3 py-1 rounded-lg mb-6 shadow-md shadow-red-400 bg-white text-red-700">
                            <Link to="/">Explore</Link></button>
                        </div>
                </div>
            )
        :(
    <div>

<div class="m-6 px-2 tracking-wider">
    <h1 class="text-center sm:text-3xl text-2xl uppercase font-semibold  ">Wishlist</h1>
                </div>
              
                <div class="flex flex-wrap justify-center">
        {
    wishlist.map(item=>{
        return(
            <>
            <div class="flex sm:justify-center w-full border-2 sm:m-4 sm:rounded-xl sm:w-1/5 md:w-1/3 lg:w-1/5  ">
                
             
                <div class="   flex justify-between sm:flex-col ">
                <div class=" text-lg font-bold hover:text-red-600 cursor-pointer  ">
              <AiOutlineClose  onClick={()=>removeWishlist(item)}
              class="text-gray-500 sm:m-2 hidden sm:block sm:hover:text-black" />
                </div>
                <img alt="" class="sm:rounded-xl  sm:w-[200px] sm:ml-8 object-cover lg:ml-0 xl:ml-8  w-[150px] h-[170px]  shadow-sm "src={item.image} width="200px"></img>
                <div class="sm:space-y-3 space-y-2 flex flex-col py-2 ml-4  ">
                    <h1 class="sm:text-lg text-md sm:m-2 font-medium">{item.title}</h1>
                    <div class="flex justify-between sm:flex-row xl:flex-row flex-col lg:flex-col ">
                    <p class="text-red-600 font-semibold space-y-2 sm:m-2"><span>Rs.{item.price}</span> </p>
                    <p class="font-semibold sm:m-2">Category: <span class="first-letter:uppercase bg-red-300 sm:px-2 px-1 rounded-md sm:py-1">{item.category}</span></p>
                    </div>
                    <div class="flex  justify-between sm:justify-center  mt-7 items-center ">
                    <span onClick={()=>addToCart(item)}
                    class="sm:m-2 border-none font-medium text-red-600 sm:shadow-md sm:w-full sm:flex sm:justify-center sm:bg-white sm:text-red-600">
                        Move To Cart</span>
                      
                        <span   onClick={()=>removeWishlist(item)}
                         class="  sm:hidden font-medium hover:underline  text-red-600">Delete</span>
                     </div>
                     
                </div>
             
                </div>

                </div>
                <Toaster/>
                </>
        )
    })
    
    }
    </div>
    

    </div>
) }       

    </div>
    </>
  )
}
