import React from 'react'
import nike1 from "../assets/girl-nike.jpg"
import nike2 from "../assets/men-nike.webp"
import nike3 from "../assets/women-nike.jpg"
import nike4 from "../assets/boys-nike.webp"

export default function Categories() {

    const image=[{
        image:nike2,
        category:"men"
    },
{
    image:nike3,
    category:"women"
},
{
    image:nike1,
    category:"girl"
},
{
    image:nike4,
    category:"boys"
}
]
 
  return (
    <div className='p-4 sm:m-16'>
        <div>
          <h2 className='flex justify-center text-3xl font-extrabold mt-12 tracking-wider text-red-700'>Top Categories</h2>

          <div className='xl:flex grid grid-cols-2 justify-center gap-7 xl:space-x-9 mt-12'>
            {image.map(a=>(
                <div className='flex flex-col justify-center items-center  relative cursor-pointer hover:scale-105'>
            <img src={a.image} className='overflow-hidden object-cover  sm:h-[300px] sm:w-[300px]  lg:h-[450px] lg:w-[400px] rounded-xl'></img>
                  
                  <span className='absolute bg-gray-100 px-4 bottom-12 left-8 py-1 rounded-lg hover:bg-gray-200  shadow-sm first-letter:uppercase'>{a.category}</span>
                    </div>
            ))}
          </div>
        </div>
    </div>
  )
}
