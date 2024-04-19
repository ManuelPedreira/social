import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.background.light};
  outline: 1px solid ${({ theme }) => theme.color.background.light};
  padding: 0.7rem 1.2rem;
  border-radius: 2rem;
  transition: all 0.1s;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.color.secondary.main};
  }
`;

export const StyledInput = styled.input`
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 100%;
`;
