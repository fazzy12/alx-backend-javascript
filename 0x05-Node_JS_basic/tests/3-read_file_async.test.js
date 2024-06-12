const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const countStudents = require('../3-read_file_async');



// Test case for countStudents
describe('countStudents', function() {
    it('should log the correct data from a valid CSV file', function(done) {
        const expectedOutput = [
            'Number of students: 10',
            'Number of students in CS: 5. List: Johann, Arielle, Jonathan, Emmanuel, Katie',
            'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'
        ].join('\n');

        // Capture the console output
        const originalLog = console.log;
        const logs = [];
        console.log = (...args) => {
            logs.push(args.join(' '));
        };

        countStudents(testFilePath)
            .then(() => {
                // Restore the original console.log
                console.log = originalLog;

                // Compare the output with the expected output
                expect(logs.join('\n').trim()).to.equal(expectedOutput);
                done();
            })
            .catch((error) => {
                console.log = originalLog;
                done(error);
            });
    });

    it('should throw an error for invalid file path', function(done) {
        countStudents('non_existent_file.csv')
            .catch((error) => {
                expect(error.message).to.include('Cannot load the database');
                done();
            });
    });
});
