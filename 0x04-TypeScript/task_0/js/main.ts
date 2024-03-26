interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// two students are created
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'USA'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'UK'
};

// array of students
const studentsList: Student[] = [student1, student2];

function render(): void {

    const table: HTMLTableElement | null = document.querySelector("#table");

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();

    const cellFirstName: HTMLTableCellElement = row.insertCell();
    const cellLocation: HTMLTableCellElement = row.insertCell();

    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;
});

}

document.addEventListener("DOMContentLoaded", () => {
    render();
});