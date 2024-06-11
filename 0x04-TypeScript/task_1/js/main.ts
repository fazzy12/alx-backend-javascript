// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Create a teacher object
const teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

const printTeacher: printTeacherFunction  = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}


// Define interface for constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Define interface for class
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement StudentClass
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(student: StudentConstructor) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
