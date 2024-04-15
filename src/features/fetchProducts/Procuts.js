import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./fetchProduct";
import { ProductCard } from "../../common/TileProduct/ProductCard";
import { ProductsContainer, TileLink } from "./style";

export const Products = () => {
  const { isLoading, isPaused, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isPaused) {
    return <div>Sprawdz polączenie z internetem</div>;
  }
  if (isLoading) {
    return <div>trwa ładowanie</div>;
  }
  if (error) {
    return <div>`nie udało się pobrać danych z powodu: ${error.message}`</div>;
  }
  if (!data) {
    return <div>Brak danych produktów</div>;
  }

  return (
    <ProductsContainer>
      {data.map((product) => (
        <TileLink to={`/product-details/${product.id}`}>
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        </TileLink>
      ))}
    </ProductsContainer>
  );
};
