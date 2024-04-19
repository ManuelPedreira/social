import { ToastType } from "../../types/toast.types";
import {
  ProgressBar,
  StyledButton,
  StyledToastContainer,
  ToastBody,
} from "./Toast.styled";

type ToastProps = {
  text: string;
  type?: ToastType;
  timeOut?: number;
  onClose: React.MouseEventHandler<Element>;
};

const Toast = ({
  text,
  type = "NORMAL",
  timeOut = 3000,
  onClose,
}: ToastProps) => {
  setTimeout(onClose, timeOut);

  return (
    <StyledToastContainer>
      <ToastBody type={type}>
        {text}
        <StyledButton onClick={onClose}>X</StyledButton>
      </ToastBody>
      <ProgressBar $timeOut={timeOut} />
    </StyledToastContainer>
  );
};

export default Toast;
