import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 25rem;
`;

export const Input = styled.input`
  width: 20rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 2px solid #7b88a8;
  background-color: transparent;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 50px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  font-size: 30px;
  color: black;
  transition: 0.2s ease-out;
  border: none;

  &:hover {
    transform: translateX(3px);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
