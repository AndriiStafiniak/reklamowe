import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBlogTile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
  transition: 0.3s;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0.5rem 1rem 0 rgb(31 128 165 / 85%);
  }
`;
export const StyledBlogTileNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: 0.1s;
  &:hover {
    color: #14e3ff;
  }
`;
export const StyledBlogMainTile = styled.div`
  background-color: #f7f7f7;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 30px;
  position: relative;
  transition: 0.2s;
`;
export const StyledBlogWrapper = styled.section`
  background: linear-gradient(
    186deg,
    #61dcdf14 0.38%,
    hsl(129deg 100% 70% / 20%) 73%
  );
  display: flex;
  gap: 30px;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Title = styled.h3`
  font-size: 22px;
`;
export const Button = styled(NavLink)`
  width: 200px;
  text-decoration: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  color: black;
  transition: 0.2s ease-out;
  border: 2px solid #d77c29;
  background-color: #d77c29;
  text-align: center;
  margin-top: 30px;

  &:hover {
    transform: translateX(3px);
    background-color: #fff;
  }
`;
