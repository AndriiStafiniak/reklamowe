import { Products } from "../Procuts";
const categoryQueryStringWomen = "/category/women's clothing";

export const WomenClothes = () => {
  return <Products category={categoryQueryStringWomen} />;
};
