export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accum, currVal) => accum + currVal.id, 0);
}
