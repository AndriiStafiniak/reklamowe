import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SubMenuLink = styled(NavLink)`
  padding: 8px 12px;
  display: block;
  color: black;
  text-decoration: none;
  font-size: 22px;
  transition: 0.2s;
  &:hover {
    color: teal;
  }
  @media (max-width: 900px) {
    color: 000;
    background-color: #fff;
  }
`;

export const SubMenuContainer = styled.div`
  display: none;
  border-radius: 10px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${({ isOpen }) =>
    isOpen &&
    `
    display: flex;
  `}
`;

export const MenuItem = styled.div`
  position: relative;
  width: 100%;
  &.MenuItem {
  }
`;
export const Arrow = styled.span`
  display: flex;
  align-self: center;
  font-size: 14px;
  margin-left: 7px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s;

  &:before {
    content: "▼";
  }
`;
export const WrapperSubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubMenuWrapper = styled.div`
  ${({ $left }) =>
    $left &&
    `
    // left styles
  `}
`;
