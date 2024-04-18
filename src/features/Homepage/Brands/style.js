import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledPremiumBrandLink = styled(NavLink)`
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
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const StyledPremiumBrandItemGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 200px));
  justify-items: center;
  justify-content: center;
`;
