export const SliderDot = styled.span`
  // ... existing styles
  ${({ $active }) =>
    $active &&
    `
    // your active styles
  `}
`;
