export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const value of reportWithIterator) {
    if (value !== reportWithIterator[reportWithIterator.length - 1]) {
      result += `${value} | `;
    }
  }
  return result.slice(0, -3);
}
