import React from "react";
import { useParams } from "react-router-dom";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  BuyButton,
  ProductWrapper,
} from "./styled";
import { handleFeatureNotAvailable } from "../../../common/TileProduct/ProductCard";
import { useQuery } from "@tanstack/react-query";

export const ProductDetails = () => {
  const { id } = useParams();

  // Używamy tego samego zapytania co w komponencie Products
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (!product) {
    return <div>Nie znaleziono produktu</div>;
  }

  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price} zł</ProductPrice>
          <BuyButton onClick={handleFeatureNotAvailable}>
            Dodaj do koszyka
          </BuyButton>
        </ProductInfo>
      </ProductContainer>
    </ProductWrapper>
  );
};
