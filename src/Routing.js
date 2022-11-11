import Home from "./pages/Home";
import Products from "./pages/Products";
import {Routes,Route} from "react-router-dom"
import React from 'react'
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./components/ProductDetails";
export default function Routing({cartItem,setCartItem,addToCart,removeCartItem,
    decreaseCartitem,products,setProducts,addToWishlist,wishlist,setWishlist,Toaster}) {
  return (
   <>
    <Routes>
        <Route  path="/" element={<Home addToCart={addToCart} setCartItem={setCartItem} cartItem={cartItem} products={products} setProducts={setProducts} Toaster={Toaster}/>}/>
        <Route path="/products" element={<Products products={products} setProducts={setProducts} addToCart={addToCart} addToWishlist={addToWishlist} />}/>
        <Route path="/products/:title" element={<ProductDetails products={products} addToCart={addToCart}  addToWishlist={addToWishlist}/>}/>
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} addToCart={addToCart} setWishlist={setWishlist}/>}/>

        <Route path="/cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem} addToCart={addToCart} removeCartItem={removeCartItem} decreaseCartitem={decreaseCartitem}/>}/>
        {/* <Route path="/checkout" element={} addToCart={addToCart} removeCartItem={removeCartItem} decreaseCartitem={decreaseCartitem}/>}/> */}

<Route path="/checkout" element={<Checkout cartItem={cartItem} />}/>
    </Routes>
   </>
  )
}
