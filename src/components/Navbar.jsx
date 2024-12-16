import React, { useEffect, useState } from "react";
import logo from "../assets/cna-high-resolution-logo-transparent.png";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useQuery } from "../contexts/QueryContext";
import { createQueryObject } from "../helpers/helpers";
import { useCart } from "../contexts/CartContext";

function Navbar() {
  const { query, setQuery } = useQuery();
  const [search, setSearch] = useState("");
  const { state } = useCart();

  function searchHandler(e) {
    setSearch(e.target.value.toLowerCase().trim());
  }
  useEffect(() => {
    // console.log(Boolean(search));
    // console.log(Boolean(query.search));
    // if (query.search === "") {
    //   const { search, ...rest } = query;
    //   setQuery(rest);
    // }
    setQuery((prevQuery) => createQueryObject(prevQuery, { search }));
  }, [search]);

  useEffect(() => {
    setSearch(query.search || "");
  }, [query]);

  return (
    <div className="py-3 px-5 w-full h-fit bg-blue-900 flex justify-between items-center sticky top-0 z-50">
      <img src={logo} alt="" className="w-16 h-11 " />
      <div className="flex items-center bg-white w-1/3 rounded-lg overflow-hidden px-2 py-1">
        <input
          type="text"
          name=""
          id=""
          className="flex-1 outline-none"
          value={search}
          onChange={searchHandler}
        />
        <MagnifyingGlassIcon className="h-8 w-8 text-blue-900" />
      </div>
      <Link to="cart" className="relative">
        <ShoppingBagIcon className="p-2 w-14 h-14 flex justify-center items-center text-white" />
        <span className="absolute top-9 right-1 border rounded-full w-5 h-5 bg-blue-900 text-white font-bold font-mono flex justify-center items-center">
          {state.selectedItems.length}
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
