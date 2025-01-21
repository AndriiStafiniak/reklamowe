import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ArticleTile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  border-radius: 15px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: white;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin: 0;
  padding: 0.8rem;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text || "#666"};
  margin: 0;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
