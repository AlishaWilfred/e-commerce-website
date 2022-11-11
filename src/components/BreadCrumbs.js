import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BreadCrumbs() {
    const {title}=useParams()

    const breadCrumbs=[
        {
            path:"/",
            display:"Home /"
        },
        {
            path:"/products",
            display:"Shop /"
        },
        {
            path:`/products/${title}`,
            display:title
        }
    ]
  return (
    <div className='sm:flex  space-x-2 xl:ml-24  md:ml-10 hidden mt-6'> 
    
    {
        breadCrumbs.map((b,i)=>(
            <div className='flex'>
           
                    <Link to={b.path}>
                    <li className={`flex items-center hover:text-blue-500 hover:underline ${i===breadCrumbs.length-1?"text-blue-500":"text-gray-700"}`}>{b.display} </li>
                    {/* <li>{title}</li> */}
                    </Link>
         
                </div>
        ))
    }
        {/* <span>{title}</span> */}

    </div>

  )
}
