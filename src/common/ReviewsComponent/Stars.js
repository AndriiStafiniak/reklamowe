import { Star, StarsStyled } from "./style";

export const Stars = ({ count }) => {
  return (
    <StarsStyled>
      {[...Array(count)].map((_, i) => (
        <Star key={i}>⭐</Star>
      ))}
    </StarsStyled>
  );
};
