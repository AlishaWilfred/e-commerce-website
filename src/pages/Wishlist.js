import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsList, BsThreeDotsVertical } from "react-icons/bs";
import Product from "./Product";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

export default function Wishlist({ wishlist, addToCart, setWishlist }) {
  const [wishlistItemLayout, setWishlistItemLayout] = useState(1);
  const [openModal, setOpenModal] = useState("");

  const removeWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id != product.id));
    alert("Are you sure you want to delete?");
    toast.error("item removed from the wishlist");
  };

  return (
    <>
      <div className="">
        <div class="sm:m-6  sm:px-2 m-2">
          <button>
            <Link to="/products">
              <span className="flex items-center hover:text-blue-500 hover:underline">
                {" "}
                <AiOutlineArrowLeft /> <span class="ml-3"> Back to shop</span>
              </span>
            </Link>
          </button>
        </div>
        {wishlist.length === 0 ? (
          <div class="flex flex-col justify-center items-center space-y-5 mt-12 ">
            <div>
              <img src="https://i0.wp.com/blacksmithcustomknives.com/wp-content/themes/buscom/assets/img/empty-wishlist.png?w=640&ssl=1"></img>
            </div>
            <h1 class="text-2xl font-bold tracking-wider">
              Your Wishlist is Emptyy!!
            </h1>
            <p class="text-lg text-gray-600 mb-6">
              Explore more and shortlist some items.
            </p>
            <div>
              <button class="px-3 py-1 rounded-lg mb-6 shadow-md shadow-red-400 bg-white text-red-700">
                <Link to="/">Explore</Link>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center m-10  flex-col">
              <div class="tracking-wider flex justify-between p-2 w-[65%] ">
                <span className="flex justify-between items-center">
                  <h1 class=" sm:text-3xl text-2xl first-letter:uppercase font-semibold relative  ">
                    Wishlist
                  </h1>
                  <span className="hidden sm:flex items-center gap-3 p-2 absolute right-60 justify-end">
                    <button
                      className={`cursor-pointer  text-2xl pb-1  ${
                        wishlistItemLayout === 0
                          ? "border-b-blue-500 border-b text-blue-500"
                          : "text-gray-800"
                      }`}
                      onClick={() => setWishlistItemLayout(0)}
                    >
                      <span>
                        <BsList />
                      </span>
                    </button>
                    <button
                      className={`cursor-pointer  text-xl pb-1 ${
                        wishlistItemLayout === 1
                          ? "border-b-blue-500 border-b text-blue-500"
                          : " text-gray-800"
                      }`}
                      onClick={() => setWishlistItemLayout(1)}
                    >
                      <span>
                        <BsGrid />
                      </span>
                    </button>
                  </span>
                </span>
              </div>

              {wishlistItemLayout === 1 ? (
                <>
                  <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
                    {wishlist.map((item) => (
                      <>
                        <div className="border rounded-md">
                          <div className="relative">
                            <span
                              onClick={() => setOpenModal(item.id)}
                              className=" float-right m-2 bg-gray-100 text-lg rounded-full py-1 px-1 cursor-pointer"
                            >
                              <BsThreeDotsVertical />
                            </span>
                            {openModal === item.id ? (
                              <div className="bg-white shadow-md rounded-md h-24 p-2 space-y-3 flex flex-col -top-20 border w-28 right-8 absolute float-right ">
                                <button
                                  onClick={() => addToCart(item)}
                                  className="text-gray-700 hover:text-gray-900 hover:font-medium"
                                >
                                  Move to cart
                                </button>
                                <button
                                  onClick={() => removeWishlist(item)}
                                  className="text-gray-700 hover:text-gray-900 hover:font-medium"
                                >
                                  Delete{" "}
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="">
                            <div className="flex justify-center items-center p-2 mt-6">
                              <img
                                src={item.image}
                                alt=""
                                width="200px"
                                className=""
                              ></img>
                            </div>
                            <div className="flex flex-col justify-center p-3 mt-3 space-y-2">
                              <h3 className="text-lg font-medium text-gray-800">
                                {item.title}
                              </h3>
                              <span className="flex justify-between items-center gap-9">
                                <p className="text-orange-600 font-bold">
                                  ${item.price}
                                </p>
                                <p className="bg-pink-100 p-1 rounded-md w-fit">
                                  Category:{item.category}
                                </p>
                              </span>
                              {/* <div className="flex justify-center mt-4 gap-2 ">
                                <button
                                  onClick={() => addToCart(item)}
                                  className="mt-3 text-center bg-red-600 hover:bg-red-700  text-white w-full py-1 rounded-md"
                                >
                                  Move to cart
                                </button>
                                <button
                                  onClick={() => removeWishlist(item)}
                                  className="mt-3 text-center text-red-600 hover:text-red-700  bg-white shadow-md w-full py-1 rounded-md"
                                >
                                  Delete
                                </button>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              ) : (
                <div className="hidden sm:flex  flex-col xl:w-[75%]  bg-white shadow-md mt-3">
                  {wishlist.map((item) => (
                    <div className="hidden sm:grid grid-cols-4 col-span-2 bg-white hover:shadow-md hover:scale-100 space-y-2 border-b p-4 ">
                      <div>
                        <img
                          alt=""
                          src={item.image}
                          width="200px"
                          className="rounded-md"
                        ></img>
                      </div>

                      <div className="ml-6 space-y-2">
                        <h2 className="text-lg font-medium text-gray-800 ">
                          {item.title}
                        </h2>
                        <p className="bg-pink-100 p-1 rounded-md w-fit">
                          Category: {item.category}
                        </p>
                      </div>

                      <div className="ml-10">
                        <span className="text-orange-600 font-bold">
                          ${item.price}
                        </span>
                      </div>
                      <div>
                        <span className="flex flex-col gap-3">
                          <button
                            onClick={() => addToCart(item)}
                            className="text-red-700 w-[75%] rounded-md py-1 bg-white shadow-md hover:text-red-800 hover:underline hover:font-semibold"
                          >
                            Move to cart
                          </button>
                          <button
                            onClick={() => removeWishlist(item)}
                            className=" hover:bg-red-700 w-[75%]  rounded-md py-1 bg-red-600 text-white hover:font-semibold"
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Toaster />
            </div>

            <div class="sm:hidden flex flex-wrap justify-center w-full">
              {wishlist.map((item) => {
                return (
                  <>
                    <div class="flex  border-2 sm:m-4 sm:rounded-xl w-[100%] ">
                      <div class="   flex w-full sm:flex-col ">
                        <div class=" text-lg font-bold hover:text-red-600 cursor-pointer  ">
                          <AiOutlineClose
                            onClick={() => removeWishlist(item)}
                            class="text-gray-500 sm:m-2 hidden sm:block sm:hover:text-black"
                          />
                        </div>
                        <img
                          alt=""
                          class="sm:rounded-xl  sm:w-[200px] sm:ml-8 object-cover lg:ml-0 xl:ml-8  w-[150px] h-[170px]  shadow-sm "
                          src={item.image}
                          width="200px"
                        ></img>
                        <div class="sm:space-y-3 space-y-2 flex flex-col py-2 ml-4  ">
                          <h1 class="sm:text-lg text-md sm:m-2 font-medium">
                            {item.title}
                          </h1>
                          <div class="flex justify-between sm:flex-row xl:flex-row flex-col lg:flex-col ">
                            <p class="text-red-600 font-semibold space-y-2 sm:m-2">
                              <span>Rs.{item.price}</span>{" "}
                            </p>
                            <p class="font-semibold sm:m-2">
                              Category:{" "}
                              <span class="first-letter:uppercase bg-red-300 sm:px-2 px-1 rounded-md sm:py-1">
                                {item.category}
                              </span>
                            </p>
                          </div>
                          <div class="flex  justify-between sm:justify-center gap-4 mt-7 items-center ">
                            <span
                              onClick={() => addToCart(item)}
                              class="sm:m-2 border-none font-medium cursor-pointer text-red-600 sm:shadow-md sm:w-full sm:flex sm:justify-center sm:bg-white sm:text-red-600"
                            >
                              Move To Cart
                            </span>

                            <span
                              onClick={() => removeWishlist(item)}
                              class="  sm:hidden font-medium hover:underline  text-red-600"
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
