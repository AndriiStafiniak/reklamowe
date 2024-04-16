import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProduct";

export const withProducts = (Component, category) => {
  return (props) => {
    const { isLoading, isError, error, data, isPaused } = useQuery({
      queryKey: [category],
      queryFn: () => fetchProducts(category),
    });

    if (isPaused) {
      return <div>Sprawdz połączenie z internetem</div>;
    }
    if (isLoading) {
      return <div>Trwa ładowanie</div>;
    }
    if (isError) {
      return (
        <div>`Nie udało się pobrać danych z powodu: ${error.message}`</div>
      );
    }
    if (!data) {
      return <div>Brak danych produktów</div>;
    }

    return <Component data={data} {...props} />;
  };
};
