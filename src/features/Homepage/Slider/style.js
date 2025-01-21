import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

export const SliderImage = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

export const SliderDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? "#fff" : "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;
