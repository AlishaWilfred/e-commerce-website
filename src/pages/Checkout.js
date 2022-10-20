import React, { useState } from 'react'

export default function Checkout({cartItem}) {
    const[showPersonalDetails,setShowPersonalDetails]=useState(false)
    const[showShippingDetails,setShowShippingDetails]=useState(false)
 const[input,setInput]=useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    zipcode:"",
    address:""
 })
 const[submit,setSubmit]=useState([])
    const totalPrice=cartItem.reduce((acc,curr)=>{
        return acc+(curr.quantity*curr.price);
    },0)

    const handleChange=(e)=>{
        const {name,value}=e.target
       setInput({...input,[name]:value})

    }
    // console.log(input)

    const addDetails=()=>{
setShowPersonalDetails(!showPersonalDetails)
setInput({firstname:"",lastname:"",email:"",phone:"",city:"",state:"",zipcode:"",address:""})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newrecord={...input,id:new Date().getTime().toString()}
        setSubmit([...submit,newrecord])
        //     console.log(submit)
        setShowPersonalDetails(false)
        setShowShippingDetails(true)

    }
  return (
    <div className='flex flex-col justify-around  xl:flex-row sm:flex-col'>

<div className='sm:flex flex-col hidden'>
        <div className='border w-[700px] h-[500px] md:h-fit  m-12 rounded-md xl:flex sm:flex sm:flex-col'>
            <div className='bg-gray-200 h-16 flex justify-between p-2 items-center'>
                <h2 className='text-xl sm:text-2xl font-semibold m-3'>Shipping details</h2>
                <span onClick={addDetails} className='text-3xl text-gray-600 m-2 cursor-pointer hover:text-blue-500'>+</span>
            </div>
            {showPersonalDetails?(<>
                <div className='flex justify-between m-6'>
                <div className='flex flex-col'>
                <label htmlFor='firstname'>First Name</label>
                <input className='border-2 w-[250px] px-4 py-1'  value={input.firstname} name="firstname" onChange={handleChange}type="text" placeholder='' ></input>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='lastname'>Last Name</label>
                <input className='border-2 w-[250px] px-4 py-1'  value={input.lastname} name="lastname" onChange={handleChange}type="text" placeholder='' ></input>
                </div>
            </div>
            <div className='flex justify-between m-6'>
                <div className='flex flex-col'>
                <label htmlFor='phone'>Phone Number</label>
                <input className='border-2 w-[250px] px-4 py-1' value={input.phone} name="phone" onChange={handleChange} type="number" placeholder='' ></input>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='lastname'>Email Address</label>
                <input className='border-2 w-[250px] px-4 py-1' value={input.email} name="email" onChange={handleChange} type="text" placeholder='' ></input>
                </div>
            </div>
            <div className='m-5'>
                <label>Full Address</label>
                <textarea name="address" rows="4" cols="85" value={input.address} onChange={handleChange} className='border-2'></textarea>
            </div>
            <div className='flex m-6 space-x-6'>
                <div className='flex flex-col'>
                <label htmlFor='city'>City</label>
                <input type="text" className='border-2 w-[200px] px-3 py-1' value={input.city} name="city" onChange={handleChange}></input>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='state'>State</label>
                <input type="text" className='border-2 w-[200px] px-3 py-1' value={input.state} name="state" onChange={handleChange}></input>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='code'>Zipcode</label>
                <input type="number" className='border-2 w-[200px] px-3 py-1' value={input.zipcode} name="zipcode" onChange={handleChange}></input>
                </div>
                
            </div>
            <button className='float-right m-2 px-2 py-1 bg-blue-500 text-white rounded-md' onClick={handleSubmit}>Submit</button>

            </>):("")}
       
          
        </div>
        </div>

          {/* personal details for mobile view */}
        <div className='flex flex-col sm:hidden'>
            <div className='border mt-6'>
                 <div className='flex items-center justify-between bg-gray-200'>
                    <h2 className='text-xl font-semibold m-2'>Shipping Details</h2>
                    <span className='text-3xl text-gray-600 m-2 hover:text-blue-500'
                     onClick={addDetails}>+</span>
                 </div>
            </div>

        </div>

        <div className='sm:hidden'>
            {showPersonalDetails?(
                <>
                <div className='mt-4 flex flex-col bg-gray-100'>
                    <div className='flex justify-between m-2'>
               <label htmlFor='firstname'>First Name</label>
                <input className='border-2' name="firstname" value={input.firstname} onChange={handleChange} type="text" required={true} placeholder='' ></input>
                </div>
                <div className='flex justify-between m-2'>
               <label htmlFor='lastname'>Last Name</label>
                <input className='border-2' name="lastname" value={input.lastname} onChange={handleChange} type="text" placeholder='' ></input>
                </div>
                <div className='flex justify-between m-2'>
               <label htmlFor='email'>Email</label>
                <input className='border-2' name="email" value={input.email} onChange={handleChange} type="email" placeholder='' ></input>
                </div>
                <div className='flex justify-between m-2'>
               <label htmlFor='phone'>Phone Number</label>
                <input className='border-2' name="phone" type="number" value={input.phone} onChange={handleChange} placeholder='' ></input>
                </div>
            
            <div className='flex justify-between m-2'>
               <label htmlFor='city'>City </label>
                <input className='border-2' name="city" value={input.city} onChange={handleChange} type="text" placeholder='' ></input>
                </div>
                <div className='flex justify-between m-2'>
               <label htmlFor='state'>State</label>
                <input className='border-2' name="state" value={input.state} onChange={handleChange} type="text" placeholder='' ></input>
                </div>
                <div className='flex justify-between m-2'>
               <label htmlFor='zipcode'>Zipcode </label>
                <input className='border-2' name="zipcode" value={input.zipcode} onChange={handleChange} type="number" placeholder='' ></input>
                </div>
                <div className='flex flex-col m-2'>
                <label>Full Address</label>
                <textarea name="address" value={input.address} onChange={handleChange} rows="3" cols="30" className='border-2'></textarea>
            </div>
                    </div>
            <button className='float-right m-2 px-2 py-1 bg-blue-500 text-white rounded-md' onClick={handleSubmit}>Submit</button>
            </>
            ):null}
        </div>
         <div className={showShippingDetails?"block":"hidden"}>
            {
                showShippingDetails&&(
                    <div className='flex flex-col m-2 '>
                        <div>
                            {
                                submit.map(s=>(
                                    <div className='border-b mb-2'>
                                    <h2 className='font-medium text-lg first-letter:uppercase'>{s.firstname} {s.lastname}</h2>
                                    <p className='text-gray-700'>{s.address}</p>
                                    <span className='text-gray-700'>{s.city}, {s.state}, {s.zipcode}</span>
                                    </div>
                                ))
                            }
                            </div>
                      
                    </div>
                )
            }
         </div>


        {/* order summary */}
        <div className='md:m-12 mt-6 xl:w-1/2 '>
            <div className='bg-gray-200 h-16 flex items-center justify-center'>
            <h1 className='text-xl lg:text-2xl m-3 bg-gray-200 font-semibold  '>Order Summary</h1>
            </div>
            <table className='w-[100%]  border '>
            <thead className='border-b'>
                <tr>
                    <th className='h-[70%]'>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>

                </tr>
            </thead>
            <tbody>{
                cartItem.map(item=>{
                    return(
                        <tr className='border-b-2 border-b-gray-200'>
                        <td className='text-center py-2'>{item.title}</td>
                        <td className='text-center px-1 py-2'>{item.price}</td>
                        <td className='text-center px-1 py-2'>{item.quantity}</td>
                        <td className='text-center px-1 py-2'>{item.price * item.quantity}</td>
    
    
                    </tr>
                    )
                })}
                <tr>
                    <td colSpan="2" className="text-end m-5 font-semibold sm:font-bold py-2">Grand Total</td>
                    <td></td>

                    <td className="text-center  font-semibold sm:font-bold py-2">{totalPrice}</td>

                </tr>
            </tbody>
           </table>

           <div className='sm:mt-10 mt-6  sm:mb-10'>
                <button className='bg-red-600 px-3 py-2 xl:float-right float-right lg:float-left rounded-md text-white'>Place Order</button>
            </div>
        </div>
    </div>
  )
}
