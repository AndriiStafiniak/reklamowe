export const fetchProducts = () =>
  fetch("https://fakestoreapi.com/products?limit=12")
    .then((response) => response.json())
    .then((data) => data);
