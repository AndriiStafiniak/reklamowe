import { useQuery } from "@tanstack/react-query";
import { fethProducts } from "./fetchProduct";

export const Products = () => {
  const { isLoading, isPaused, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fethProducts,
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
  console.log("komponent:", data);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <img src={product.image} width={"300px"} alt="product image" />
          <p>{product.price}</p>
          <p>{product.name}</p>
          <p>{product.category}</p>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>

          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
};
