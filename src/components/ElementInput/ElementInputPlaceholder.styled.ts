import styled from "styled-components";

export const ElementInputPlaceholderContainer = styled.label`
  display: flex;
  gap: 1em;
  background-color: #202327;
  color: #e7e9ea;
  padding: 0.7em 1.2em;
  border-radius: 2em;
  outline: 1px solid #202327;
  transition: all 0.1s;

  &:focus-within {
    outline: 1px solid #1d9bf0;
  }
`;

export const StyledInput = styled.input`
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 100%;
`;
