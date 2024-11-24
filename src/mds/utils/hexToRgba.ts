export const hexToRgba = (hex: string, opacity: number) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex =
      hex.substring(0, 1) +
      hex.substring(0, 1) +
      hex.substring(1, 2) +
      hex.substring(1, 2) +
      hex.substring(2, 3) +
      hex.substring(2, 3);
  }
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
};
