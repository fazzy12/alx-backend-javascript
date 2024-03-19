export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accum, curr) => accum + curr.id, 0);
}
