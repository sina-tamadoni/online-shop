import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateBackward } from "@fortawesome/free-solid-svg-icons";
import ErrorPage from "../components/ErrorPage";
import Loader from "../components/Loader";
// import { fetchProducts } from "../features/productsSlice";
// import { useSelector } from "react-redux";

function DetailsPage() {
  const { id } = useParams();
  const { dispatch } = useCart();
  //   const { products } = useSelector((state) => state.products);
  //   const product = findProductDetails(+id);
  //   const findProductDetails = (id) => {
  //     return products.find((product) => productDetails.product.id === id);
  //   };
  const [productDetails, setProductDetails] = useState({
    loading: true,
    product: {},
    error: "",
  });

  async function getData(id) {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${+id}`
      );
      setProductDetails({ loading: false, product: data, error: "" });
    } catch (error) {
      setProductDetails({ loading: false, product: {}, error: error.message });
    }
  }

  console.log(productDetails);

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <>
      {productDetails.loading ? (
        <Loader />
      ) : productDetails.error ? (
        <div className="min-h-[385px] flex flex-col justify-center items-center">
          <ErrorPage />
          <h2 className="font-sans font-bold text-lg text-blue-900">
            {productDetails.error}
          </h2>
        </div>
      ) : (
        <div className="flex justify-between items-start h-screen border border-gray-300 rounded-lg m-10 p-5">
          <div className="w-1/2 h-full flex justify-center items-center p-5">
            <div className="m-5 w-full h-full bg-gray-200 rounded-lg">
              <img
                src={productDetails.product.image}
                alt=""
                className="mix-blend-darken w-full h-full p-14"
              />
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-between items-start p-5 m-5">
            <div className="w-full flex flex-col justify-start items-start">
              <h2
                className={
                  productDetails.product.title &&
                  productDetails.product.title.length > 70
                    ? "text-xl font-sans font-bold mb-5 text-justify pr-7"
                    : "text-3xl font-sans font-bold mb-5 text-justify pr-7"
                }
              >
                {productDetails.product.title}
              </h2>
              <span className="text-xl font-sans font-semibold mb-5">
                ${productDetails.product.price}
              </span>
              <p
                className={
                  productDetails.product.description &&
                  productDetails.product.description.length > 700
                    ? "text-sm font-sans h-fit text-justify text-gray-600 pr-7 mb-5"
                    : productDetails.product.description &&
                      productDetails.product.description.length > 400
                    ? "text-[1rem] font-sans h-fit text-justify text-gray-600 pr-7 mb-5"
                    : "text-lg font-sans h-fit text-justify text-gray-600 pr-7 mb-5"
                }
              >
                {productDetails.product.description}
              </p>
            </div>

            <button
              className="w-full text-center border py-3 mt-10 bg-blue-800 text-white text-lg rounded-lg font-sans font-medium hover:bg-blue-900"
              onClick={() =>
                dispatch({ type: "ADD", payload: productDetails.product })
              }
            >
              Add to shopping cart
            </button>
          </div>

          <Link to="/shop" className="tooltip">
            <span className="returnTooltip">Return to shop</span>
            <FontAwesomeIcon
              icon={faRotateBackward}
              className="w-5 h-5 text-blue-900"
            />
          </Link>
        </div>
      )}
    </>
  );
}

export default DetailsPage;
