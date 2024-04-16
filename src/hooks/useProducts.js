import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProduct";

export const useProducts = (category) => {
  const { isLoading, isError, error, data, isPaused } = useQuery({
    queryKey: [category],
    queryFn: () => fetchProducts(category),
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isPaused,
  };
};
