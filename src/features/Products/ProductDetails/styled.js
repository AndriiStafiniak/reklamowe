import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 40px 20px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 500px;
  border-radius: 10px;
  object-fit: contain;
  background-color: white;
  padding: 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text || "#666"};
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin-top: auto;
`;

export const BuyButton = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.primary || "#007bff"};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark || "#0056b3"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
