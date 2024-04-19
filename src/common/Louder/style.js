import styled, { keyframes } from "styled-components";

export const bounceAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #333;
  border-radius: 50%;
  display: inline-block;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }

  &:nth-child(3) {
    animation-delay: 0;
  }
`;
