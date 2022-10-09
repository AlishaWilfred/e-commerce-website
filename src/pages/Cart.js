import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineArrowLeft,AiOutlineClose} from "react-icons/ai"


export default function Cart({cartItem,setCartItem,addToCart,removeCartItem,decreaseCartitem}) {

    const totalPrice=cartItem.reduce((acc,curr)=>{
        return acc+(curr.quantity*curr.price);
    },0)

    const clearCart=()=>{
        setCartItem([])
    }

// const url="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouRrngoGJet6upAFMOcQt3wA1v8zzXzQPXQ&usqp=CAU"
  return (
    <>
    <div>
    {
        cartItem.length===0?(
        <div class="flex  flex-col justify-center items-center sm:m-12 mt-28 w-full p-12">
            <img src={url} className='w-[500px] '></img>
            <h1 class="text-3xl font-bold mt-5 ">Your Cart is empty</h1>
            <p class="p-6 text-xl italic">Looks like you have no item in your shopping cart</p>
            <button class="flex mb-9 space-x-3 items-center text-lg text-blue-800"><Link to="/products"><span className='flex items-center gap-3 '>Click <span className='text-blue-500 hover:underline'>here</span> to continue shooping</span></Link></button>
        </div>
        )
    :(
    <div class="flex flex-col">
        <div class="flex justify-center mt-12 text-2xl font-serif sm:text-3xl  uppercase tracking-wide ">
           <h1 class="">Cart  Items</h1>
           </div>
           <div>
           <div class="">
            <button onClick={clearCart}
            class="sm:text-lg text-md font-medium mt-2 sm:m-6 m-2 px-4 py-2 bg-white text-gray-800 shadow-md hover:text-gray-600 rounded-lg border-none cursor-pointer" >Clear Cart</button></div>
            </div>
      {
        cartItem.map((item)=>{ 
            return(
                <div class="flex justify-around border relative w-fit lg:w-full sm:m-6 m-2 lg:m-0 flex-1">
                 
                   <img class="p-4 md:p-6 " src={item.image} width="200px"></img>
                   <div class="mt-12 flex-1 sm:ml-44">
                    <h1 class="textl-lg sm:text-2xl font-semibold">{item.title}</h1>
                    <div class="flex mt-12 text-md sm:space-x-6 sm:text-lg  ">
                        <button onClick={()=>decreaseCartitem(item)}
                        class="text-lg px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white">-</button>
                    <p class="text-lg px-2 py-2 ">{item.quantity}</p>
                    <button onClick={()=>addToCart(item)}
                    class="text-lg px-4 py-2  rounded-xl hover:bg-green-600 hover:text-white">+</button>

                    </div>
                    </div>
                    <div class="sm:mt-14 mt-12 sm:flex-1 sm:ml-60 md:ml-32 ">
                        <h3 class="text-md sm:text-lg ">Rs. {item.quantity*item.price}</h3>
                        </div>
                        <div class="sm:mt-12  absolute right-2 top-1 md:-top-8 sm:text-xl hover:text-red-500 cursor-pointer flex-1 md:ml-6">
                        <AiOutlineClose class="" onClick={()=>removeCartItem(item)}/>
                            </div>
                    </div>
            )
        })
      }
        <div class="flex  justify-around md:justify-between items-center m-12 text-xl sm:text-2xl font-semibold">
        <h1 class=" justify-center sm:ml-32 ">Total Amount</h1>
        <p class="sm:mr-60 ">Rs. {totalPrice}</p>
    </div>
    <div class="flex justify-between sm:m-12 p-2 sm:mr-44">
        <button class="text-lg font-medium px-4 sm:ml-16"><Link to="/products"><span class="flex items-center gap-2 hover:text-blue-500 hover:underline"><AiOutlineArrowLeft /><span>Back</span></span></Link></button>
        <button class="bg-red-600  hover:bg-red-400 text-white sm:text-lg text-md font-medium border-none rounded-lg px-4 py-2"><Link to="/checkout">Checkout</Link></button>
        </div>
    </div>
    )}

  
    </div>
    </>
  )
}