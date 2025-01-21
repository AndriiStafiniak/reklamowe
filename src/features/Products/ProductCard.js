import React from "react";
import { useNavigate } from "react-router-dom";
import { toProduct } from "../../routes";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(toProduct(product.id));
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <StyledProductCard>
        <div className="product-content">{/* Your content */}</div>
      </StyledProductCard>
    </div>
  );
};

export default ProductCard;
