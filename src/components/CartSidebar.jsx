import React from "react";
import { useCart } from "../contexts/CartContext";

function CartSidebar() {
  const { state, dispatch } = useCart();
  return (
    <div className="border rounded-md flex flex-col py-3 px-7 bg-white w-1/3 *:border-b">
      <h2 className="font-sans text-xl font-semibold text-stone-800 py-4">
        Order summary
      </h2>
      <div className="flex justify-between items-center py-4 ">
        <span className="text-stone-500 font-sans">Subtotal</span>
        <span className="text-stone-800 font-sans">${state.totalPrice}</span>
      </div>
      <div className="flex justify-between items-center py-4 ">
        <span className="text-stone-500 font-sans">Shipping estimate</span>
        <span className="text-stone-800 font-sans">$5</span>
      </div>
      <div className="flex justify-between items-center border-none py-4">
        <span className="font-sans text-lg font-semibold text-stone-800">
          Order total
        </span>
        <span className="font-sans text-lg font-semibold text-stone-800">
          ${(+state.totalPrice + 5).toFixed(2)}
        </span>
      </div>
      <button
        className="py-3 rounded-md bg-blue-800 hover:bg-blue-900 text-white font-sans font-semibold my-5"
        onClick={() => dispatch({ type: "CHECKOUT" })}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartSidebar;
