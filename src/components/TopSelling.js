import React from 'react'
import data from '../pages/data'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function TopSelling() {
  return (
    <div class=' sm:mt-20 sm:m-16'>
      <h1 class="flex justify-center text-3xl font-extrabold mt-12 tracking-wider text-red-700">What's Trending</h1>
        <div class='flex   sm:h-[300px] md:h-[350px]  mt-12  p-4 sm:p-0 space-x-4'>
   
   
             <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`
        }}
        modules={[Pagination]}
breakpoints={{
  300:{
    slidesPerView:1
  },
  390:{
    slidesPerView:1},
    680:{
      slidesPerView:2
    },
    780:{
      slidesPerView:3
    },
    1280:{
      slidesPerView:4
    }

}}
      
      >
     
  
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md   border">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c841355-ed4b-4a01-a7ec-7e64cc6321f9/air-force-1-mid-07-lx-shoes-nCq9WX.png"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md border">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLd4RVpeWrZDhjWoEnhFKPyT7FFOhIK1npg&usqp=CAU"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md  border">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyy9OubjxGoK8KGFitlDo82EI2Hq46lJB3g&usqp=CAU"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md border ">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c841355-ed4b-4a01-a7ec-7e64cc6321f9/air-force-1-mid-07-lx-shoes-nCq9WX.png"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md  border">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c841355-ed4b-4a01-a7ec-7e64cc6321f9/air-force-1-mid-07-lx-shoes-nCq9WX.png"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
        <SwiperSlide>
           <div class="sm:w-[260px] sm:h-[260px] w-full h-full rounded-md shadow-md  border">
         <img class="w-[100%] h-[100%] object-cover hover:scale-105" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c841355-ed4b-4a01-a7ec-7e64cc6321f9/air-force-1-mid-07-lx-shoes-nCq9WX.png"></img>
         {/* <p class="text-lg text-center">nike shoes for men</p> */}
         </div>
        </SwiperSlide> 
      </Swiper>
          
        
        </div>
    </div>
  )
}
