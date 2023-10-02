export default function getStudentsByLocation(myList, city) {
  const newList = myList.filter((val) => val.location === city);
  return newList;
}
