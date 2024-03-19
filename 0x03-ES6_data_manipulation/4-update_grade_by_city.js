export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = foundGrade ? foundGrade.grade : 'N/A';
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  }).filter((student) => student.location === city);
}
