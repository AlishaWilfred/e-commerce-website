import React, { useState } from "react";
import Product from "./Product";
import data from "./data";
import { Link } from "react-router-dom";
import TopSelling from "../components/TopSelling";
import Banner from "../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import Categories from "../components/Categories";

export default function Home({ products, addToCart }) {
  const [swiper, setSwiper] = useState("");
  const slicedProduct = products.slice(3, 11);

  const swipePrev = () => {
    swiper.slidePrev();
  };

  const swipeNext = () => {
    swiper.slideNext();
  };

  const deliveryData = [
    {
      title: "Free Shipping",
      // image:"https://cdn-icons-png.flaticon.com/128/2769/2769339.png",
      icon: <FaShippingFast />,
      detail: "Order over Rs.1000",
    },
    {
      title: "Support 24/7",
      // image:"https://www.clipartmax.com/png/middle/181-1812024_microphone-headphones-headset-computer-icons-call-center-headset-icon.png",
      icon: <BiSupport />,
      detail: "Quick Support",
    },
    {
      title: "15 Days Return",
      // image:"https://i.pinimg.com/736x/06/bd/c1/06bdc15d75ba18ca08fe90197ceeddd7--vector-icons-ux.jpg",
      icon: <BsArrowReturnLeft />,
      detail: "Product Exchange",
    },
    {
      title: "Payment Secure",
      // image:"https://cdn.iconscout.com/icon/free/png-256/secure-payment-3203119-2670487.png",
      icon: <RiSecurePaymentFill />,
      detail: "100% Payment secure",
    },
  ];

  return (
    <>
      <Banner />
      {/* <div class="flex justify-between flex-col items-center  "> */}

      <div class="sm:flex sm:justify-between sm:items-center grid grid-cols-2 gap-7 pt-12 p-4   pb-12 md:m-6 sm:m-16 ">
        {deliveryData.map((item) => {
          return (
            <div className="flex items-center space-x-4 md:space-x-3">
              <div class="flex space-x-2 md:space-x-1 items-center">
                <span className="text-red-600 text-4xl md:text-3xl font-semibold">
                  {item.icon}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <h2 class="sm:text-md font-medium" style={{ fontSize: "15px" }}>
                  {item.title}
                </h2>

                <p class=" text-xs md:text-sm font-semibold text-gray-400 ">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}

      <Categories />

      {/* top selling */}

      <div>
        <TopSelling />
      </div>

      {/* Featured Collection----------------------------------->>>>>> */}
      <div className=" sm:mt-20  ">
        <div class="flex justify-center px-2  ">
          <h1 class="text-3xl font-extrabold mt-12 tracking-wider text-red-700">
            Featured Collection
          </h1>
        </div>

        <div class="sm:m-16 md:m-3 sm:h-[300px] md:h-[400px] h-[340px] flex">
          <div
            className="text-gray-400 mr-4 grid place-items-center cursor-pointer sm:text-4xl text-3xl"
            onClick={swipePrev}
          >
            <MdArrowBackIos className="bg-gray-200 rounded-full ml-2 px-1 hover:text-blue-500 hover:bg-transparent sm:hover:text-5xl hover:text-4xl py-2" />
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            //  slidesPerGroup={3}
            //  loop={true}
            //  loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              // bulletClass: `swiper-paginations`
            }}
            //  navigation={true}
            modules={[Pagination, Navigation]}
            onSwiper={(s) => setSwiper(s)}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              680: {
                slidesPerView: 3,
              },
              780: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            <div className="">
              {slicedProduct.map((s) => (
                <div className="flex flex-col bg-red-200 ">
                  <SwiperSlide>
                    <div className=" sm:w-[200px] sm:h-[200px] mt-10">
                      <img
                        src={s.image[0]}
                        className="object-cover max-w-[100%] h-[100%] shadow-md "
                      ></img>
                      <div className="sm:px-2 sm:py-1 space-y-2 flex">
                        <div className="mt-3 h-10">
                          <Link to={`/products/${s.title}`}>
                          <p className="sm:text-md text-sm xl:text-base font-medium hover:text-blue-500  ">
                            {s.title}
                          </p>
                          </Link>
                        </div>
                      
                        </div>
                        <span className="mt-1  text-xs  sm:text-sm bg-green-100 text-green-600 sm:px-2 px-1 rounded-md">
                          {s.discount}% Off
                        </span>
                        <div className="sm:flex sm:gap-3 gap-2 md:px-2 flex-row sm:items-center  md:mr-0 flex items-center sm:mr-14 flex-start ">
                          <span className="text-red-600 sm:text-md xl:text-xl text-sm ">
                            Rs.{s.price - (s.price * s.discount) / 100}
                          </span>
                          <span className="line-through sm:text-md text-xs xl:text-lg text-gray-500">
                            Rs. {s.price}
                          </span>
                        </div>
                        <button
                          onClick={() => addToCart(s)}
                          class="xl:text-lg  md:text-md text-sm font-medium md:px-2  text-red-600 hover:font-semibold hover:text-red-800 cursor-pointer"
                        >
                          Add to Cart
                        </button>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
          <div
            className="text-gray-400 grid place-items-center cursor-pointer sm:text-4xl text-3xl"
            onClick={swipeNext}
          >
            <MdArrowForwardIos className="bg-gray-200 rounded-full ml-2 px-1 hover:text-blue-500 hover:bg-transparent sm:hover:text-5xl text-4xl py-2" />
          </div>
        </div>
      </div>
      <div></div>
      {/* <div class="border-t-2 sm:mt-32 md:mt-32 mt-9 ">
<div class="flex justify-center items-center text-center  text-md  mt-16  sm:mt-28 md:mt-28  md:space-x-2 sm:justify-between  sm:ml-44 sm:m-24 ">
    <div class="space-y-1 sm:flex sm:space-x-5 lg:space-x-12 lg:ml-44">
    <div >
    <h2 class="text-lg md:text-md font-bold ">Free Shipping</h2>
  <p class="text-gray-500">On all Orders</p>
    </div>
    <div>
    <h2 class="text-lg md:text-md font-bold ">Easy 30 days Return</h2>
  <p class="text-gray-500">30 days money back guarantee</p>
    </div>
    <div>
    <h2 class="text-lg md:text-md font-bold">International Warranty</h2>
  <p class="text-gray-500">e-commerce info Subtitle</p>
    </div>
    <div>
    <h2 class="text-lg md:text-md font-bold">100% Secure Checkout</h2>
  <p class="text-gray-500">PayPal/MasterCard/Visa</p>
    </div>
</div>
</div>
</div> */}
    </>
  );
}
