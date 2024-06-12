const fs = require('fs');

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const students = {};

        data.split('\n').forEach(line => {
            const [name, field] = line.split(',');

            if (name && field) {
                if (!students[field]) {
                    students[field] = [];
                }

                students[field].push(name);
            }
        });

        const studentCount = Object.keys(students).length;
        console.log(`Number of students: ${studentCount}`);

        for (const [field, names] of Object.entries(students)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
