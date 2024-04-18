import { ProductCard } from "../../common/TileProduct/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { ProductsContainer, TileLink } from "./style";
import { Louder } from "../../common/Louder/Louder";

export const Products = ({ category }) => {
  const { isLoading, error, data, isPaused } = useProducts(category);

  if (isPaused) {
    return <div>Sprawdz połączenie z internetem</div>;
  }
  if (isLoading) {
    return <Louder />;
  }
  if (error) {
    return <div>`Nie udało się pobrać danych z powodu: ${error.message}`</div>;
  }
  if (!data) {
    return <div>Brak danych produktów</div>;
  }

  return (
    <ProductsContainer>
      {data.map((product) => (
        <TileLink key={product.id} to={`/product-details/${product.id}`}>
          <li>
            <ProductCard product={product} />
          </li>
        </TileLink>
      ))}
    </ProductsContainer>
  );
};
