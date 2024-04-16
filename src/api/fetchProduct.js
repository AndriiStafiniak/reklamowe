export const fetchProducts = async (category) => {
  const baseURL = "https://fakestoreapi.com/products";
  const url = `${baseURL}${category}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
