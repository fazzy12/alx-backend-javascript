# JavaScript Data Manipulation

![](pic.jpg)

This repository contains a collection of JavaScript functions for data manipulation using modern ES6 features. Below, you'll find a detailed guide on how to use each function along with instructions on setting up and running the project.

## Installation

To use these functions, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/your-username/alx-backend-javascript.git


2. Navigate to the project directory:

```cd alx-backend-javascript
```


3. Install the project dependencies:

```
npm install
```


## Functions Overview

This repository contains the following functions for data manipulation:

1. **getListStudents**: Returns an array of student objects with attributes `id`, `firstName`, and `location`.
2. **getListStudentIds**: Returns an array of student IDs extracted from a list of student objects.
3. **getStudentsByLocation**: Filters and returns an array of student objects based on the specified city.
4. **getStudentIdsSum**: Returns the sum of all student IDs from a list of student objects.
5. **updateStudentGradeByCity**: Updates the grades of students in a specific city based on the provided grades array.
6. **createInt8TypedArray**: Creates a new Int8 typed array with a value at a specific position.
7. **setFromArray**: Creates a Set from an array.
8. **hasValuesFromArray**: Checks if all elements in an array exist within a Set.
9. **cleanSet**: Returns a string of Set values starting with a specific string.
10. **updateUniqueItems**: Updates the quantity of unique items in a Map.
11. **queryAPI** (Advanced): Tracks the number of times an API endpoint is queried and throws an error if the load is high.

## Usage

Each function is provided in a separate file within the `0x03-ES6_data_manipulation` directory. To use a specific function, follow these steps:

1. Import the desired function into your JavaScript file:

```
import functionName from "./path-to-function-file.js";
```

2. Call the imported function with the required arguments.

## Examples

Here are some examples of how to use the functions:

```
import getListStudents from "./0-get_list_students.js";

const students = getListStudents();
console.log(students);



import updateStudentGradeByCity from "./4-update_grade_by_city.js";
import getListStudents from "./0-get_list_students.js";

const students = getListStudents();
const updatedGrades = updateStudentGradeByCity(students, "San Francisco", [{ studentId: 5, grade: 97 }]);
console.log(updatedGrades);

```

## Running Tests
To run the tests for the functions, execute the following command:

```
npm test
```

## Contributions
Contributions to this repository are welcome. If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Description of changes'.
4. Push your changes to your fork: git push origin feature-name.
5. Create a pull request against the main repository.


## author
[Ifeanyi kalu](https://github.com/fazzy12)