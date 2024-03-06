export const includesInsensitive = (
  value: string,
  matchValue: string
): boolean => {
  if (!value) return false;

  return value.toLowerCase().includes(matchValue.toLowerCase());
};

export const stringToColorHexa = (text: string): string => {
  let hash = 0;

  text.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    const lessSaturatedValue = Math.floor((value + 128) / 2); // less saturated color
    colour += lessSaturatedValue.toString(16).padStart(2, "0");
  }

  return colour;
};
