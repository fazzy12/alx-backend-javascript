const { expect } = require('chai');
const { execSync } = require('child_process');


describe('countStudents', function() {
    it('should log the correct data from a valid CSV file', function() {
        const expectedOutput = [
            'Number of students: 10',
            'Number of students in CS: 6. List: John, Arielle, Jonathan, Emmanuel, Guillaume, Katie',
            'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'
        ].join('\n');

        const output = execSync(`node 2-read_file.js ${testFilePath}`).toString();

        expect(output.trim()).to.equal(expectedOutput);
    });

    it('should throw an error for invalid file path', function() {
        try {
            execSync(`node 2-read_file.js non_existent_file.csv`).toString();
        } catch (error) {
            expect(error.message).to.include('Cannot load the database');
        }
    });
});
