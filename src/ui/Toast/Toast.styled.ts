import styled, { keyframes } from "styled-components";
import Button from "../Button";
import { ToastType } from "../../types/toast.types";
import { getToastColor } from "./Toast.utils";

const progressAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

export const StyledToastContainer = styled.div`
  display: flex;
  flex-flow: column;

  background-color: ${({ theme }) => theme.color.background.light};
  border: 1px solid ${({ theme }) => theme.color.secondary.main};
  border-radius: 5px;
`;

type StyledToastProps = {
  type: ToastType;
};

export const ToastBody = styled.div<StyledToastProps>`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem 0.4rem 1.2rem;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.font.family.main};
  color: ${({ type, theme }) => getToastColor(type, theme)};
`;

export const StyledButton = styled(Button)`
  padding: 0.4rem 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.main};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary.light};
  }
`;

type ProgressBarProps = {
  $timeOut: number;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.primary.light};
  animation: ${progressAnimation} ${({ $timeOut }) => $timeOut}ms linear;
`;
