export type ToastType = "NORMAL" | "WARNING" | "ERROR";

export type ToastData = {
  id: number;
  text: string;
  type?: ToastType;
  timeOut?: number;
};
