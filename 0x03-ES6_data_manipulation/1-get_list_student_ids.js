export default function getListStudentIds(myList) {
  if (!Array.isArray(myList)) {
    return [];
  }
  return myList.map((val) => val.id);
}
