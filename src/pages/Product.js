import data from "./data";
import {Link} from "react-router-dom"
import React from "react";
import Pagination from "./Pagination";
import {FaHeart, FaSearch} from "react-icons/fa"
export default function Product({ products, addToCart,addToWishlist,Toaster }) {
  const [currentpage, setCurrentPage] = React.useState(1);
  const [postsperpage, setPostsperPage] = React.useState(5);
const [search,setSearch]=React.useState("")
const[wishlist,setWishlist]=React.useState("")


const searchedProduct=products.filter(item=>{
    if(search.value==="") return item
    if(item.title.toLowerCase().includes(search.toLowerCase()))
    return item
})

  const totalPage = Math.ceil(searchedProduct.length / postsperpage);

  console.log(totalPage);
  const pageNumber = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  const lastpageIndex=currentpage*postsperpage
  const firstpageIndex=lastpageIndex-postsperpage
  const currentPage=searchedProduct.slice(firstpageIndex,lastpageIndex)

  const handlePrev=()=>{
          if(currentPage!=products.length){
             setCurrentPage(page=>page-1)
        
         }
  }
 const handleNext=()=>{
    if(currentPage!=1){
        setCurrentPage(page=>page+1)
    }
 }

  return (

    <>
    <div class="flex ml-24 mb-4 relative">
        <input class="px-4 sm:px-3 sm:py-3 rounded-md  w-60 py-2 border-none active:border-2 "
        type="text" placeholder="What are you looking for..." value={search} onChange={(e)=>setSearch(e.target.value)}>
        </input>
        <FaSearch 
        className="absolute sm:top-4  top-3 left-0  ml-52 xl:text-lg text-gray-400"
        // class="fa-solid fa-magnifying-glass absolute flex ml-52 md:ml-60 md:top-2 mt-3 px-2 m-1 md:m-2 text-gray-400"
        
        />

    </div>
      <div class="flex flex-wrap sm:flex-wrap justify-center items-center sm:gap-x-10 lg:gap-x-8 space-y-3 md:space-y-3  lg:gap-y-5 ">
        {currentPage.
        map((item) => {
          return (
            <div class=" border rounded-md w-56 lg:w-64 xl:w-1/5  sm:w-1/3 md:w-1/3 " key={item.id}>
              <div class="m-5 relative">
                <img
                  class=" 
                   w-44 sm:w-full  shadow-md shadow-gray-400  rounded-xl transition-0.4s hover:scale-110 "
                  src={item.image}
                  width=""
                  height=""
                ></img>
           

                <div class="absolute flex justify-end top-4 sm:right-2 right-4">
                    <button onClick={()=>{
                      setWishlist(item.id)
                      addToWishlist(item)
                    }} class="focus:scale-150">
                   < FaHeart style={{
                    color:wishlist===item.id?"red":"lightgray"
                   }}
                    class="text-md"/>
                    </button>
                    <Toaster/>
                </div>
              </div>
              <div class="mt-6 space-y-2 m-3 ">
                <h2 class="text-lg md:text-xl sm:text-xl font-bold text-center"><Link to={`/products/${item.id}`}>{item.title}</Link></h2>
                <div class=" flex justify-between sm:items-center">
                  <p class="text-lg  text-red-400">Rs {item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    class="border-none font-medium rounded-lg md:px-3 sm:py-2 md:py-2 sm:px-3 px-2 py-1 text-sm text-white bg-red-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="flex justify-center items-center m-6 p-6 space-x-6  text-lg cursor-pointer">
        <div>
          <button onClick={handlePrev} disabled={currentpage===1}
           class="px-2  bg-gray-100 rounded-xl  text-red-600 active:bg-black active:text-white">Prev</button>
        </div>
        <div class="flex space-x-6 ">
            {pageNumber.map((num)=>{
                return (
                    <h1 class={`px-2 md:px-2.5 rounded-full hover:bg-red-500 hover:text-white ${currentpage===num?"bg-red-500 text-white":""}`}
                     key={num} onClick={()=>setCurrentPage(num)}>{num}</h1>
                )
            })}
           </div>
        <div>
          <button onClick={handleNext}
          class="px-2 bg-gray-100 rounded-xl text-red-600 active:bg-black active:text-white">Next</button>
        </div>
      </div>
    
    </>
  );
}
