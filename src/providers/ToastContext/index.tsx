import { createContext, useState } from "react";
import { ToastData } from "../../types/toast.types";
import { createPortal } from "react-dom";
import ToastContainer from "../../ui/ToastContainer";

export type ToastContextValue = {
  toastList: ToastData[];
  setToastList: React.Dispatch<React.SetStateAction<ToastData[]>>;
};

export const ToastContext = createContext<ToastContextValue>({
  toastList: [],
  setToastList: () => {},
});

const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastList, setToastList] = useState<ToastData[]>([]);

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
