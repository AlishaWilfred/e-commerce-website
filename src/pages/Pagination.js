import React from 'react'
import Product from './Product';
export default function Pagination({products,searchedProduct,currentPage,setCurrentPage,postsperpage}) {




    
      const totalPage = Math.ceil(searchedProduct.length / postsperpage);
    
    //   console.log(totalPage);

      const pageNumber = [];
      for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
      }
    
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
    <div>
        <div class="flex justify-center items-center m-6 p-6 space-x-6  text-lg cursor-pointer">
        <div>
          <button onClick={handlePrev}
           class="px-2 bg-gray-100 rounded-xl  text-red-600 active:bg-black active:text-white">Prev</button>
        </div>
        <div class="flex space-x-6 ">
            {pageNumber.map((number)=>{
                return (
                    <h1 class="px-2  rounded-xl hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white" key={number} onClick={()=>setCurrentPage(number)}>{number}</h1>
                )
            })}
           </div>
        <div>
          <button onClick={handleNext}
          class="px-2 bg-gray-100 rounded-xl text-red-600 active:bg-black active:text-white">Next</button>
        </div>
      </div>
    </div>
  )
}
