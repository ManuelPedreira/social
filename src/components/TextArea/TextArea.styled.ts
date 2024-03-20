import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
  resize: none;
  border: 0;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  overflow: hidden;
  padding: 0;
  min-height: 28px;

  &:focus {
    outline: 0;
  }
`;
