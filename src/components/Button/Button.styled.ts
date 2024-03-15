import styled from "styled-components";

export const StyledButton = styled.button`
  display: inherit;
  padding: 9px;
  border-radius: 90px;
  transition: all 0.2s;
  background-color: transparent;

  &:hover {
    border-color: transparent;
    background-color: #202327;
  }

  &:active {
    background-color: #30343a;
  }

  &:focus {
    outline: 1px;
  }

  * {
    background-color: transparent;
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: inherit;
    }

    * {
      fill: gray;
    }
  }
`;
