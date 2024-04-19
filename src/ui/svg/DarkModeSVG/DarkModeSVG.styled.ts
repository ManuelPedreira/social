import styled from "styled-components";

export const StyledDarkMode = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: ${({ theme }) => theme.color.text.main};
  }
`;
