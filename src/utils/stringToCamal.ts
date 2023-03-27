const cap = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const stringToCamal = (string: string, omit?: boolean) => {
  let arr = string.split("-");

  if (omit) {
    const newArr = arr.slice(1, arr.length);
    return arr[0] + newArr.map((value) => cap(value)).join("");
  }
  return arr.map((value) => cap(value)).join("");
};

export default stringToCamal;
