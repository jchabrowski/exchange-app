export default function shortenPrice(number) {
  if (number <= 0.09) {
    return number;
  }
  const fixedNum = number.toFixed(2);
  return fixedNum;
}
