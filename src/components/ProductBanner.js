import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function ProductBanner() {
    
  const ImageData=[
    {
       bg:"https://danswayuk.com/wp-content/uploads/2020/07/Nikenewcode.jpg"
    },
    {
        bg:"https://rematch.net/wp-content/uploads/2021/10/Nike-Black-Friday-2021-30-Off-at-Nike.com_.jpeg"
    },
    
    // {
    //       bg:"https://i.ebayimg.com/images/g/awIAAOSw~X1fusTL/s-l500.jpg"
    // },
    {
        bg:"https://i0.wp.com/sportstealz.com/wp-content/uploads/2019/07/Nike-Flash-sale.png?resize=636,468&ssl=1"
    }
 
 
  ]
  return (
    <div className='w-[100%] h-[100%]'>
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
     
      >
        {
            ImageData.map(d=>(
                <div >
                    <SwiperSlide>
                        <div className=' w-[100%] flex justify-center'>
                        <img src={d.bg} className="block object-fill w-[100%] h-[50vh] md:h-[60vh] md:w-[100%] lg:w-[100%] lg:h-[80vh]"></img>
                        </div>
                    </SwiperSlide>
                </div>
            ))
        }


      </Swiper>

    </div>
  )
}
