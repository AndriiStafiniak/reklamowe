import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.125rem;
  position: relative;
`;

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;

  @media (max-width: 900px) {
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 999;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

export const BurgerMenuButton = styled.button`
  display: block;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 1000;
  position: absolute;
  right: 4%;
  top: 6%;
  display: none;
  @media (max-width: 900px) {
    display: block;
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
    &::before { transform: rotate(45deg) translate(5px, 5px); }
    &::after { transform: rotate(-45deg) translate(7px, -8px); }
  `}
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  padding: 10px 20px;
  font-size: 22px;
  transition: 0.2s;
  @media (max-width: 900px) {
    color: #fff;
  }
  &:hover {
    color: teal;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
