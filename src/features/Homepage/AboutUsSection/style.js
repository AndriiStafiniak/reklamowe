import styled from "styled-components";
export const Wrapper = styled.article`
  background-color: #f3f3f3;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
`;
export const ArticleTile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 1rem;
  position: relative;
  transition: 0.3s;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h2`
  padding: 20px;
  font-size: 42px;
  @media (max-width: 900px) {
    font-size: 26px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  max-height: 500px;
`;
export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.2;
`;
