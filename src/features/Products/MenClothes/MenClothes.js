import { Products } from "../Procuts";
const categoryQueryStringMen = "/category/men's clothing";

export const MenClothes = () => {
  return <Products category={categoryQueryStringMen} />;
};
