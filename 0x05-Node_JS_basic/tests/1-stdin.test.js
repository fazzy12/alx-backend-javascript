const { spawn } = require('child_process');
const assert = require('assert');

describe('1-stdin.js', function() {
    it('should display the correct messages based on user input', function(done) {
        const program = spawn('node', ['1-stdin.js']);
        let output = '';

        // Listen to stdout data
        program.stdout.on('data', (data) => {
            output += data.toString();
        });

        // Provide user input
        program.stdin.write('John\n');
        program.stdin.write('fazzy\n');

        // Listen to program exit
        program.on('exit', (code) => {
            assert.strictEqual(code, 0);
            assert.strictEqual(output.includes('Welcome to Holberton School, what is your name?'), true);
            assert.strictEqual(output.includes('Your name is: John'), true);
            assert.strictEqual(output.includes('This important software is now closing'), true);
            done();
        });
    });
});
