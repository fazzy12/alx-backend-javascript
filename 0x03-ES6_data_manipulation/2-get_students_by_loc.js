export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter(function (students) {
    return students.location === city;
  });
}
