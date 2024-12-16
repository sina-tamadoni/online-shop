export function searchedProducts(products, search) {
  if (!search) {
    return products;
  }
  return products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
}

export function filteredProducts(searchedProduct, category) {
  if (!category) {
    return searchedProduct;
  }
  return searchedProduct.filter((product) => product.category === category);
}

export function createQueryObject(currentQuery, newQuery) {
  console.log(currentQuery);
  console.log(newQuery);
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
}

export function sumQuantitiesAndPrices(shoppingCart) {
  const itemsCounter = shoppingCart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  const totalPrice = shoppingCart
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);
  return { itemsCounter, totalPrice };
}

export function productsQuantityInShoppingCart(products, id) {
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return products[index].quantity;
  }
}
