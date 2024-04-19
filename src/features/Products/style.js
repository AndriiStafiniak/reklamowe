import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const TileLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  color: inherit;
`;
export const ProductsContainer = styled.ul`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 340px));
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
export const ButtonArrow = styled.button`
  display: ${({ isScrollable }) => (isScrollable ? "flex" : "none")};
  width: 100px;
  height: 30px;
  border: none;
  background-color: crimson;
`;
