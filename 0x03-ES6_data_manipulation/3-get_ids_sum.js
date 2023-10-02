export default function getStudentIdsSum(mylist) {
  const sum = mylist.reduce((prev, next) => prev + next.id, 0);
  return sum;
}
