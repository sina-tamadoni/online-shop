import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faPlug,
  faGem,
  faMars,
  faVenus,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useQuery } from "../contexts/QueryContext";
import { createQueryObject } from "../helpers/helpers";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const categories = [
  {
    id: "women's clothing",
    get title() {
      return capitalizeFirstLetter(this.id);
    },
    icon: faPersonDress,
  },
  {
    id: "men's clothing",
    get title() {
      return capitalizeFirstLetter(this.id);
    },
    icon: faPerson,
  },
  {
    id: "jewelery",
    get title() {
      return capitalizeFirstLetter(this.id);
    },
    icon: faGem,
  },
  {
    id: "electronics",
    get title() {
      return capitalizeFirstLetter(this.id);
    },
    icon: faPlug,
  },
  {
    id: "all",
    get title() {
      return capitalizeFirstLetter(this.id);
    },
    icon: faBorderAll,
  },
];

function Categories() {
  const { query, setQuery } = useQuery();
  function categoryHandler(e) {
    const { tagName } = e.target;
    const parentElement = e.target.parentElement.tagName;
    if (tagName === "LI" || tagName === "svg" || tagName === "path") {
      switch (parentElement) {
        case "UL":
          setQuery((prevQuery) =>
            createQueryObject(prevQuery, { category: e.target.id })
          );
          break;
        case "LI":
          setQuery((prevQuery) =>
            createQueryObject(prevQuery, {
              category: e.target.parentElement.id,
            })
          );
          break;
        case "svg":
          setQuery((prevQuery) =>
            createQueryObject(prevQuery, {
              category: e.target.parentElement.parentElement.id,
            })
          );
          break;
      }
    }
    return;
  }

  return (
    <div className="flex flex-col gap-7 justify-center items-center mt-10 mx-10">
      {/* <h2 className="text-2xl font-bold font-[Broadway]">Categories</h2> */}
      <ul className="flex justify-around items-center w-full border bg-blue-100 p-7 rounded-3xl">
        {categories.map((category) => (
          <li
            className={
              query.category === category.id
                ? "tooltip relative flex justify-center items-center rounded-full p-3 bg-blue-900 cursor-pointer ring-offset-2 ring-2 ring-blue-900"
                : "tooltip relative flex justify-center items-center rounded-full p-3 bg-white cursor-pointer"
            }
            id={category.id}
            key={category.id}
            onClick={categoryHandler}
          >
            <span
              className={
                query.category === category.id
                  ? "hidden"
                  : "tooltiptext text-gray-500 font-sans"
              }
            >
              {category.title}
            </span>
            <FontAwesomeIcon
              icon={category.icon}
              className={
                query.category === category.id
                  ? "w-10 h-10 text-white"
                  : "w-10 h-10 text-blue-900"
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
