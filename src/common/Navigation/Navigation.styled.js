export const StyledNav = styled.div`
  // ... existing styles
  ${({ $isOpen }) =>
    $isOpen &&
    `
    // your styles
  `}
`;
