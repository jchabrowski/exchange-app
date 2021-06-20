export default function getFloat(number) {
  if (number <= 0.09) {
    return number;
  }
  const fixedNum = number.toFixed(2);
  return fixedNum;
}
