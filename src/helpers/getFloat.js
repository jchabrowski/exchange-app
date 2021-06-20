export function getFloat(number) {
  if (number <= 0.09) {
    return number
  }
  
  let fixedNum = number.toFixed(2);
  return fixedNum;
}