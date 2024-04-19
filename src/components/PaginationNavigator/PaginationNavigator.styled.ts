import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

export const PaginationNavigatorContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.background.light};
  border: 1px solid ${({ theme }) => theme.color.background.light};

  &:active {
    background-color: ${({ theme }) => theme.color.primary.main};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.secondary.main};
  }

  &:disabled {
    &:hover {
      background-color: ${({ theme }) => theme.color.background.light};
      border: 1px solid ${({ theme }) => theme.color.background.light};
    }
  }

  * {
    padding: 3px;
  }

  span {
    width: 20px;
  }
`;

export const StyledInput = styled(Input)`
  width: 2rem;

  input {
    text-align: center;
  }
`;
