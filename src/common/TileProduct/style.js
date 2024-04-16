import styled from "styled-components";
import { ReactComponent as IconStar } from "../../images/icons/star.svg";

export const TileWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.07);
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleProduct = styled.h3`
  font-size: 24px;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const ProductCategory = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.silverChalice};
`;
export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const RateText = styled.span`
  font-size: 14px;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 33px;
  @media (max-width: 900px) {
    font-size: 22px;
  }
`;
export const ExtraPriceContent = styled.span`
  font-size: 16px;
  transition: 0, 3s;
  &::after {
    content: "cena od";

    transition: opacity 0.3s;
  }

  &:hover::after {
    content: "cena netto";
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 15rem;
  padding: 1rem;
`;
export const IconStarStyled = styled(IconStar)`
  width: 20px;
  height: 20px;
  transform: translateY(-1px);
`;
