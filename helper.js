export const wrap = (str, size, br = "\n") => {
  return str.replace(
    new RegExp(`(?![^\\n]{1,${size}}$)([^\\n]{1,${size}})\\s`, "g"),
    `$1${br}`
  );
};

export const discount = (price, percentage) => {
  return percentage == 0 ? price : (price * (1 - percentage / 100)).toFixed(2);
};

export const truncate = (str, size = 14) => {
  return str.substring(0, size);
};

export const random = () => {
  return Math.floor(Math.random() * 45) + 1;
};