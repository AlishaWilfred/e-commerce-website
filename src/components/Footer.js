import React from 'react'
import {FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"

export default function () {
  return (
    <div class="flex flex-col bg-red-100 ">
         <div class="block sm:flex md:flex px-3 m-9 md:m-5">
         <div class="flex flex-col flex-1  px-2  ">
            <img class="flex justify-center bg-transparent rounded-3xl w-1/6 md:w-1/4 md:h-6 lg:w-1/6 lg:h-12 h-14"  src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/HENRY/original.PNG?1627058942" width="50px">
            </img><span class="text-2xl md:text-xl font-bold ">Henry Store</span>
            <p class="break-words tracking-wide mt-3">The customer is at the heart of our unique business model which includes
            <p>  design</p></p>
            </div>

            <div class=" flex-1 space-y-3 sm:space-y-6 md:space-y-6 sm:px-2 mt-9">
                <h2 class=" text-lg md:text-lg font-extrabold tracking-wider">Delivery Time</h2>
                <div class=" ">
                <span class="font-semibold text-lg">Monday-Friday</span>
                <p>10.00am-11.00pm</p>
                </div>
           <div class=" ">
           <span class="font-semibold text-lg">Saturday-Sunday</span>
                <p>Off  Day</p>
           </div>
            </div>

            <div class="flex-1 mt-9">
                <h2 class="text-xl font-extrabold tracking-wider">Contact</h2>
                <div class="mt-6  md:mt-4 space-y-2 md:space-y-1 tracking-wider">
                    <h2 class="text-lg font-semibold mr-2"><i class="fa-solid fa-location-dot"></i>Location: <span>Keshav Nagar behind ShubhLaxmi Apartment,313001</span>
                    <span>Udaipur ,Rajasthan</span></h2>
                    <h2 class="text-lg font-semibold">Phone: <span>+91-7123546789</span></h2>
                    <h2 class="text-lg font-semibold">Email: <span>henrystore@example.com</span></h2>
                </div>
            </div>

            <div class=" flex  flex-1 flex-col sm:ml-9 mt-8">
                <h2 class="text-xl font-extrabold tracking-wider">Newsletter</h2>
                <p class="text-lg font-semibold mt-3"> Subscribe our NewsLetter</p>
                <div class="relative">
                    <input class="px-2 py-2 bg-transparent border-none outline-none" type="email" placeholder='Enter your email'></input>
                    <i 
                    class="fa-solid fa-magnifying-glass items-center absolute text-lg text-gray-400 ml-44 -left-2 right-0 top-2"></i>
                  
                </div>
                <div class="mt-6">
                    <h2 class="text-lg font-semibold">Follow:</h2>
                    <div class="flex space-x-2 mt-2 text-white">
                    <FaFacebook  className='text-red-600 text-xl'
                    // class=" bg-red-600 px-2 text-lg rounded-2xl"
                    />
                    <FaLinkedin className='text-red-600 text-xl'
                    //  class="fa-brands fa-linkedin bg-red-600 px-2 text-lg rounded-2xl"
                      />
                    <FaInstagram className='text-red-600 text-xl '
                    //  class="fa-brands fa-instagram bg-red-600 px-2 text-lg rounded-2xl"
                     />
                    </div>
                
                </div>
            </div>

            
            
            </div>
            <div class="flex justify-center items-center px-2 py-3 mt-4">
                <p class="font-semibold">Copyright@2022,  All Rights Reserved | This website is made 
                     <span class="text-md font-bold text-red-600 flex justify-center"> by Henry</span> </p>
            </div>
    </div>
  )
}
