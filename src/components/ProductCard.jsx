import React, { useEffect, useState } from "react";
// import cover01 from "../../assets/image01.webp";
// import image01 from "../../assets/landing.jpg";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { productsQuantityInShoppingCart } from "../helpers/helpers";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function ProductCard({ product }) {
  const [color, setcolor] = useState("#000000");
  useEffect(() => {
    const newColor = getRandomColor();
    setcolor(newColor);
  }, []);
  const { id, category, title, price, description, image } = product;
  const { state, dispatch } = useCart();
  console.log(state);
  const quantity = productsQuantityInShoppingCart(state.selectedItems, id);
  console.log(quantity);
  return (
    <div className="flex flex-col justify-center items-center h-[400px] relative rounded-3xl overflow-hidden select-none">
      <div
        style={{ backgroundColor: color }}
        className={`p-4 flex justify-between w-full h-full clip-custom absolute top-0 left-0`}
      >
        <div className="w-2/3 text-white flex flex-col gap-1">
          <h3 className="text-xl font-extrabold italic text-blue-900 font-sans">
            {title.split(" ").slice(0, 2).join(" ")}
          </h3>
          <p className="text-left text-xs italic">
            {description.split(" ").slice(0, 7).join(" ")}
          </p>
        </div>
        <div className="bg-red-100 rounded-full w-[70px] h-[70px] flex justify-center items-center text-2xl font-extrabold font-sans text-blue-900">
          ${Math.floor(price)}
        </div>
      </div>

      <div className="w-[150px] h-[150px] bg-white rounded-full z-10 overflow-hidden flex justify-center items-center">
        <img
          className="w-fit h-fit p-9 hover:scale-125 transition-all"
          src={image}
          alt=""
        />
      </div>

      <div className="w-full h-full bg-white clip-custom2 absolute flex justify-center items-end">
        <div className="flex justify-between w-full p-2 items-center mb-4">
          <div className="tooltip">
            <span className="informationTooltipText text-blue-900 border border-blue-900">
              information
            </span>
            <Link to={`${id}`}>
              <InformationCircleIcon className="w-8 h-8 text-blue-900 cursor-pointer" />
            </Link>
          </div>

          <div
            className={
              quantity === 1
                ? "flex justify-center items-center"
                : "flex justify-center items-center border rounded-full border-blue-900"
            }
          >
            {quantity === 1 && (
              <FontAwesomeIcon
                icon={faTrash}
                className="w-6 h-6 text-blue-900 cursor-pointer"
                onClick={() => {
                  dispatch({ type: "REMOVE", payload: product });
                }}
              />
            )}

            {quantity > 1 && (
              <FontAwesomeIcon
                icon={faMinus}
                className="w-5 h-5 border rounded-full p-1 bg-blue-900 text-white cursor-pointer"
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
              />
            )}

            {!!quantity && (
              <span className="text-blue-900 text-xl text-center font-sans flex justify-center items-center font-bold mx-2">
                {quantity}
              </span>
            )}

            {quantity === 0 ? (
              <button
                onClick={() => dispatch({ type: "ADD", payload: product })}
                className=" px-3 py-1 rounded-full text-white bg-blue-900 text-sm font-semibold text-center font-sans cursor-pointer"
              >
                Add to cart
              </button>
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="w-5 h-5 border rounded-full p-1 bg-blue-900 text-white cursor-pointer"
                onClick={() => dispatch({ type: "INCREASE", payload: product })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
