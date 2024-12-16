import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../features/productsSlice";
import { useQuery } from "../contexts/QueryContext";
import { filteredProducts, searchedProducts } from "../helpers/helpers";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

function Products() {
  const [dispalyed, setDispalyed] = useState([]);
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const [searchParams, setSearchParamas] = useSearchParams();
  console.log(loading, products, error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDispalyed(products);
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const query = {};
    if (search) {
      query.search = search;
    }
    if (category) {
      query.category = category;
    }
    setQuery(query);
  }, [products]);

  useEffect(() => {
    setSearchParamas(query);
    let finalProducts = searchedProducts(products, query.search);
    finalProducts = filteredProducts(finalProducts, query.category);
    setDispalyed(finalProducts);
  }, [query]);
  console.log(dispalyed);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center">
        <ErrorPage />
        <h2 className="font-sans font-bold text-lg text-blue-900">{error}</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7 m-10">
      {dispalyed.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
