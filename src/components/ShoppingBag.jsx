import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// import { useState } from "react";
function ShoppingBag() {
//   const [isvisible, setisvisible] = useState(false);
  return (

    <div className="w-fit flex justify-start items-center fixed bottom-[50%] left-0 z-10 bg-white border rounded-r-md border-blue-900 overflow-hidden">
      <div
        className="w-14 h-14 p-2 flex items-center relative hover:flex hover:w-28 hover:justify-between hover:transition-all"
        onMouseEnter={() => setisvisible((prev) => !prev)}
        onMouseLeave={() => setisvisible(false)}
      >
        <span
          className={
            isvisible
              ? "flex justify-center items-center pt-2 w-4/5 text-blue-900 text-md font-semibold"
              : "hidden"
          }
        >
          <Link to="/cart">Cart</Link>
        </span>
        <ShoppingBagIcon className="h-8 w-8 text-blue-900 mt-2 mr-1" />
        <span className="rounded-full w-6 h-6 flex justify-center items-center absolute -top-1 -right-1 text-sm bg-blue-900 text-white">
          0
        </span>
      </div>
    </div>
  );
}

export default ShoppingBag;
