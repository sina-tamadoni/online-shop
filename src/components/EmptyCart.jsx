import React from "react";
import emptyCart from "../assets/pngfind.com-cart-png-2727925.png";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="my-7 w-full h-fit flex flex-col justify-center items-center">
      <img src={emptyCart} alt="" className="w-[500px] text-blue-900" />
      <span className="text-gray-400 font-bold font-sans text-3xl mb-2">
        Your cart is Empty!
      </span>
      <span className="mb-7 text-gray-400 font-semibold font-sans italic text-xl">
        Add something to make me Happy!!
      </span>
      <Link to="/shop">
        <button className="border px-20 py-3 text-white font-sans text-xl bg-blue-800 hover:bg-blue-900 rounded-xl">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
