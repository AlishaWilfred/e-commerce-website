import React from "react";
import { useParams } from "react-router-dom";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import data from "./data";
import Product from "./Product";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper";


 import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
import ProductBanner from "../components/ProductBanner";

// import "./styles.css";

export default function Products({
  products,
  setProducts,
  addToCart,
  addToWishlist,
  like,
  Toaster
}) {
  const allcategories = ["all", ...new Set(data.map((item) => item.category))];

  const [categories, setCategories] = React.useState(allcategories);

  const[currentIndex,setCurrentIndex]=React.useState(0)

  const filterItems = (categories) => {
    if (categories === "all") {
      setProducts(data);
    }
    if (categories === "men") {
      setProducts(data.filter((item) => item.category === "men"));
    }
    if (categories === "women") {
      setProducts(data.filter((item) => item.category === "women"));
    }
    if (categories === "boys") {
      setProducts(data.filter((item) => item.category === "boys"));
    }
    if (categories === "girls") {
      setProducts(data.filter((item) => item.category === "girls"));
    }
  };


  const handlePrev=()=>
  {
    if(currentIndex>0)
    setCurrentIndex(currentIndex-1)
  }

  const handleNext=()=>{
    if(currentIndex<ImageData.length-1)
    setCurrentIndex(currentIndex+1)
  }
  return (
    <div>
        <div class="mt-12">
        {/* <div class="grid place-items-center cursor-pointer sm:ml-32 text-5xl sm:text-6xl text-gray-300 hover:text-blue-500 font-bold" onClick={handlePrev}> <BsChevronLeft/></div> */}

        {/* <div class=" sm:mt-12 h-[100%] w-[100%] bg-center bg-no-repeat bg-contain  translate-x-4 scale-100 transition duration-1000"
         style={{backgroundImage:`url(${ImageData[currentIndex].bg})`}}
        >
            </div> */}
            <ProductBanner/>

            {/* <div class="grid place-items-center cursor-pointer ml-5 sm:mr-32 text-5xl sm:text-6xl text-gray-300 hover:text-blue-500 font-bold" onClick={handleNext}><BsChevronRight/></div> */}

      </div>
      <div class="flex flex-col justify-center items-center mt-16 sm:mt-32  ">
        <h1 class="text-3xl font-bold">Exclusive Collection</h1>

        <div class=" flex justify-center space-x-7 mt-12 w-full md:w-full  lg:space-x-20 sm:px-3 sm:py-3 py-2 px-2 items-center sm:text-lg text-sm font-bold bg-red-600 text-white">
          {categories.map((cat, ind) => {
            return (
              <button
                class={` sm:px-3 sm:py-2 px-2 py-1 rounded-lg first-letter:uppercase focus:bg-white focus:text-red-600 ${
                  categories === cat ? "bg-white text-red-600" : ""
                }`}
                type="button"
                key={ind}
                onClick={() => filterItems(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div class="mt-12">
          <Product
            products={products}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            Toaster={Toaster}
            like={like}
          />
        </div>
       
      </div>
    </div>
  );
}
