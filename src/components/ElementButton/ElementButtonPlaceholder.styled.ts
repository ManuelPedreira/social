import styled from "styled-components";

export const ElementButtonPlaceholderContainer = styled.div`
  display: inherit;
  padding: 9px;
  border-radius: 90px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #202327;
  }

  &:active {
    background-color: #30343a;
  }
`;
