export const fethProducts = () =>
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((response) => response.json())
    .then((data) => data);
