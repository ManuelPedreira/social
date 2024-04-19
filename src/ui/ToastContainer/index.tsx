import Toast from "../Toast";
import { StyledToastContainer } from "./ToastContainer.styled";
import useToast from "../../providers/ToastContext/useToast";

const ToastContainer = () => {
  const { toastList, deleteToast } = useToast();

  return (
    <StyledToastContainer>
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          text={toast.text}
          type={toast.type}
          timeOut={toast.timeOut}
          onClose={() => deleteToast(toast.id)}
        />
      ))}
    </StyledToastContainer>
  );
};

export default ToastContainer;
