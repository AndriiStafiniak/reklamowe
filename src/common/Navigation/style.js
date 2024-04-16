import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.125rem;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 160%;
  padding: 5px;
  border-radius: 10px;
  letter-spacing: -0.01875rem;
  transition: 0.3s;
  background-color: ${(props) => (props.isActive ? "#00BCD4" : "transparent")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#000000")};
  &:hover {
    background-color: #61dcdf;
  }
  &.active {
    background-color: #00bcd4;
    color: white;
    padding: 10px 20px;
    clip-path: polygon(8% 18%, 85% 31%, 115% 71%, 0% 83%);
    transition: background-color 0.3s ease;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
    color: #b7b7b7;
    margin-top: 50px;
  }
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 2px;
  background-color: #000;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: #000;
    width: 30px;
    height: 2px;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -10px;
  }
  &::after {
    top: 10px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    background-color: transparent;
    &::before {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &::after {
      transform: rotate(-45deg) translate(7px, -8px);
    }
  `}
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
  padding: 10px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    padding: 30px;
  }
`;

export const BurgerMenuButton = styled.button`
  position: absolute;
  top: 50px;
  right: 30px;
  display: none;
  transition: 0.2s;
  &:hover {
    filter: brightness(120%);
  }
  @media (max-width: 900px) {
    display: block;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 1000;
  }
`;
