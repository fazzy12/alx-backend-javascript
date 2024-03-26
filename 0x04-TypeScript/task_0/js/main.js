// two students are created
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'USA'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'UK'
};
// array of students
var studentsList = [student1, student2];
function render() {
    var table = document.querySelector("#table");
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var cellFirstName = row.insertCell();
        var cellLocation = row.insertCell();
        cellFirstName.textContent = student.firstName;
        cellLocation.textContent = student.location;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    render();
});
