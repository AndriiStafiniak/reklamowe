import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const TileLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  color: inherit;
`;
export const ProductsContainer = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 340px));
  justify-content: center;
`;
