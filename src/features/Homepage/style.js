import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BrandIcon } from "../../images/icons/parker.svg";

export const Section = styled.section`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const SectionTitle = styled.h2`
  padding: 20px;
  font-size: 42px;
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
export const CategoryLink = styled(NavLink)`
  font-size: 22px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.cerulean};
  }
`;
export const CategoryLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const PremiumBrand = styled(NavLink)`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  border-radius: 20px;
  max-width: 200px;
  max-height: 10rem;
  padding: 10px;
  &:hover {
    box-shadow: none;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.07);
  }
`;
export const PremiumBrandItem = styled(BrandIcon)`
  width: 100%;
  height: 100%;
`;
export const PremiumBrandItemGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 340px));
  justify-items: center;
  justify-content: center;
`;
