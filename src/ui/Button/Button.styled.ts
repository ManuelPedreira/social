import styled from "styled-components";

export const StyledButton = styled.button`
  display: inherit;
  border-radius: 90px;
  transition: all 0.2s;
  background-color: transparent;
  border: 0;
  padding: 9px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary.main};
  }

  * {
    background-color: transparent;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.primary.light};

    &:hover {
      background-color: transparent;
    }

    * {
      fill: ${({ theme }) => theme.color.primary.light};
      color: ${({ theme }) => theme.color.primary.light};
    }
  }
`;
