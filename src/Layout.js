import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing'
import Header from './components/Header'
import Footer from './components/Footer'
import data from './pages/data'
export default function Layout() {
    const [products,setProducts]=React.useState(data)

  const[cartItem,setCartItem]=React.useState([])
  const[wishlist,setWishlist]=React.useState([])
  const[like,setLike]=React.useState(false)

  function addToCart(product){
   const productExist=cartItem.find(item=>item.id===product.id)
   if(productExist){
       setCartItem(cartItem.map(item=>item.id===product.id?{...productExist,quantity:productExist.quantity+1}:item))
   }
   else{

       setCartItem([...cartItem,{...product,quantity:1}])
   }

  }

  function removeCartItem(product){
    const newProduct=cartItem.filter(item=>item.id!=product.id)
    setCartItem(newProduct)
  }

  function decreaseCartitem(product){
    const productExist=cartItem.find(item=>item.id===product.id)
    if(productExist.quantity>1){
      setCartItem(cartItem.map((item)=>item.id===product.id?
      {...productExist,quantity:productExist.quantity-1}:item))

    }else{
      setCartItem(cartItem.filter(item=>item.id!=product.id))
    }
  }


  function addToWishlist(product){
   const productExist=wishlist.find(item=>item.id===product.id)
   if(productExist){
      //  setCartItem(cartItem.map(item=>item.id===product.id?{...productExist,quantity:productExist.quantity+1}:item))
    alert("Item is already added to the wishlist!!")

      
   }
   else{
    
       setWishlist([...wishlist,{...product,quantity:1}])
   
   }

  }
  return (
    <>
      <Router>
        <Header cartItem={cartItem} wishlist={wishlist}/>
      <Routing products={products} setProducts={setProducts} cartItem={cartItem} setCartItem={setCartItem} addToCart={addToCart} 
      removeCartItem={removeCartItem} decreaseCartitem={decreaseCartitem} addToWishlist={addToWishlist}
      wishlist={wishlist} setWishlist={setWishlist} like={like}
      />
      
        <Footer/>
      </Router>
    </>
  )
}