// process.stdin.setEncoding('utf8');

// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// process.stdin.on('data', function (data) {
//     const name = data.toString().trim();
//     if (name) {
//         process.stdout.write(`Your name is: ${name}\n`);
//         process.exit();
//     }
// });

// process.on('exit', function () {
//     process.stdout.write('This important software is now closing\n');
// });


process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();

    if (chunk) {
        process.stdout.write(`Your name is: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});