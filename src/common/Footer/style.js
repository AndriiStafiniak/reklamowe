import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem;
  border-bottom: 1px solid #000;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    justify-content: center;
  }
`;

export const FooterLogo = styled.img`
  width: 100px;
  height: 50px;
  margin: 1.125rem 1.75rem;

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 170%;
  color: inherit;
  display: ${({ isAdress }) => (isAdress ? "flex" : "auto")};
  transition: 0.2s;
  flex-direction: column;
  &:hover {
    color: ${({ theme }) => theme.colors.cerulean};
  }

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export const SubFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  align-items: center;
  padding: 1.25rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    gap: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 160%;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const FooterLinkContainer = styled.div`
  display: grid;
  width: 100%;

  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  align-items: baseline;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`;
