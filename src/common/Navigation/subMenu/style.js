import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SubMenuLink = styled(NavLink)`
  padding: 8px 12px;
  display: block;
  color: black;
  text-decoration: none;
  font-size: 22px;
  @media (max-width: 900px) {
    color: 000;
    background-color: #fff;
  }
`;

export const SubMenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};

  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;
  `}
`;

export const MenuItem = styled.div`
  position: relative;
  &.active {
    display: block;
  }
`;
export const Arrow = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-left: 7px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  transition: transform 0.2s;

  &:before {
    content: "▼";
  }
`;
