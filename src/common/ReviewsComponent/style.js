import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 500px));
  justify-content: center;
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(auto, 320px));
  }
`;
export const ReviewsTile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.concrete};
  background-color: #f6f7f8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition: 0.2s;
`;
export const UserContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0px;
    margin-bottom: 10px;
  }
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: black;
`;
export const PublikDate = styled.p`
  font-size: 14px;
  color: #988e8e;
`;
export const UserContent = styled.div`
  display: flex;
`;
export const StarsStyled = styled.div`
  display: flex;
  gap: 3px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const Star = styled.span`
  font-size: 18px;
`;
