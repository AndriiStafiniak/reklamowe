import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const SectionTitle = styled.h2`
  padding: 20px;
  font-size: 42px;
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
export const CategoryLink = styled(NavLink)`
  font-size: 22px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.cerulean};
  }
`;
export const CategoryLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
