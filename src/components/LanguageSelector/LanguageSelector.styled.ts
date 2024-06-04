import styled from "styled-components";

export const LanguageSelectorContainer = styled.div`
  display: flex;
  position: fixed;
  margin: 1rem;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 1rem;
  background-color: transparent;

  left: 0;
  bottom: 0;

  z-index: 1000;
`;

export const LanguageSelect = styled.select`
  flex-grow: 1;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.background.main};
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  border-radius: 10px;
  transition: all 0.1s;

  &:hover {
    outline: 0px;
    background-color: ${({ theme }) => theme.color.background.light};
    border: 1px solid ${({ theme }) => theme.color.secondary.main};
  }
`;
