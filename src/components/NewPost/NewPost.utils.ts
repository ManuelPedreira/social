import { Theme } from "../../theme/styled";

export const getCountColor = (theme: Theme, count?: number) => {
  const color = theme.color;
  if (count === undefined) return color.text.darker;
  if (count <= 0) return color.error.main;
  if (count < 30) return color.warning.main;
  return color.text.darker;
};

export const getColorPalette = (theme: Theme, isError?: boolean) => {
  const color = theme.color;
  if (isError) return color.error;
  return color.secondary;
};
