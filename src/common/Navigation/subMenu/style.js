import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SubMenuContainerMain = styled.div`
  position: relative;
`;

export const SubMenuLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem;
  position: relative;
  z-index: 10;
  color: #b7b7b7;
  @media (max-width: 900px) {
    gap: 1.5rem;
    font-size: 1rem;
  }
`;

export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 12;
  background-color: #eee;
  padding: 5px;
  border-radius: 20px;
  width: 200px;
  padding: 10px;
  position: absolute;
  top: 31px;
  left: 0;
  z-index: 22;

  @media (max-width: 900px) {
    gap: 1.5rem;
    bottom: 30px;
    right: 30px;
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0;
  transition: 0.2s;
  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: 900px) {
    gap: 1.2rem;
    color: white;
    font-size: 1.2rem;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  display: inline-block;
  font-size: 16px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(270deg)" : "rotate(90deg)")};
`;

export const SubMenuTitle = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem;
  @media (max-width: 900px) {
    gap: 1.5rem;
    color: #b7b7b7;
    font-size: 1.2rem;
    margin: 0;
  }
`;
export const SubMenuLinkKontainer = styled.div`
  display: flex;
  gap: 8px;
`;
