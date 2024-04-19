import { Theme } from "../../theme/styled";
import { ToastType } from "../../types/toast.types";

export const getToastColor = (type: ToastType, theme: Theme) => {
  const colors = theme.color;

  const colorTranslator: Record<ToastType, string> = {
    NORMAL: colors.text.main,
    WARNING: colors.warning.main,
    ERROR: colors.error.main,
  };

  return colorTranslator[type];
};
