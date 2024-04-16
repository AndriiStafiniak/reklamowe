import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.07);
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};
  position: absolute;
  left: ${(props) => props.left}%;
  transition: left 0.5s ease-in-out;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.span`
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "green" : "gray")};
  width: ${(props) => (props.active ? "30px" : "auto")};
`;
export const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;
