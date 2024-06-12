const fs = require('fs');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const students = {};
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const headers = lines.shift();

            lines.forEach(line => {
                const [firstname, lastname, age, field] = line.split(',');

                if (firstname && field) {
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstname);
                }
            });

            const studentCount = lines.length;
            console.log(`Number of students: ${studentCount}`);

            for (const [field, names] of Object.entries(students)) {
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
