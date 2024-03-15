export const includesInsensitive = (
  value: string,
  matchValue: string
): boolean => {
  if (!value) return false;

  return value.toLowerCase().includes(matchValue.toLowerCase());
};
