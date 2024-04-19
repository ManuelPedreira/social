import styled from "styled-components";
import Button from "../../ui/Button";

type StyledButtonProps = {
  mode: string;
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  align-self: center;
  padding: 0.7rem;

  transform: rotate(${({ mode }) => (mode === "lightMode" ? 180 : 0)}deg);

  background-color: ${({ theme }) => theme.color.background.light};
  border: 1px solid ${({ theme }) => theme.color.background.light};

  &:active {
    background-color: ${({ theme }) => theme.color.primary.main};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.secondary.main};
  }
`;
