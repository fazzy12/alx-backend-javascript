# JavaScript Promises and Async/Await Tasks

![](pic.jpeg)


This repository contains a collection of JavaScript tasks focused on promises, async/await, and error handling. Each task is designed to demonstrate proficiency in handling asynchronous operations in JavaScript.

## Table of Contents

- [Tasks Overview](#Tasks-Overview)
- [Getting Started](#Getting-Started)
- [Usage](#Usage)
- [File Structure](#File-Structure)
- [Testing](#Testing)
- [Contributing](#Contributing)
- [Author](#Author)


### Tasks-Overview

The tasks in this repository cover various aspects of promises, async/await, and error handling in JavaScript. Here's a brief overview of the tasks included:
1. Keep every promise you make and only make promises you can keep
    - A task to return a promise using a specified prototype function.
2. Don't make a promise...if you know you can't keep it
    - Return a promise based on a boolean parameter, resolving or rejecting based on the parameter value.
3. Catch me if you can!
    - Append handlers to a function that handles responses from a Promise, logging messages based on resolution or rejection.
4. Handle multiple successful promises
    - Resolve multiple promises and log the results.
5. Simple promise
    - Return a resolved promise with specific object values.
6. Reject the promises
    - Write a function returning a rejected Promise with an error message.
7. Handle multiple promises
    - Import and use functions from other files to handle multiple promises and return an array of results.
8. Load balancer
    - Write a function that returns the value of the first resolved promise among two promises.
9. Throw error / try catch
    - Write a function that handles division and throws an error if the denominator is zero.
100. Throw an error
    - Write a function that handles errors and returns an array with values or error messages.

## Getting-Started
To get started with the tasks, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project directory in your terminal.
4. Install dependencies by running npm install.

## Usage

Each task is contained within its respective JavaScript file. To execute a specific task, you can run the corresponding main file using Node.js. For example:

```
node 0-main.js
```

Replace `0-main.js` with the filename of the task you want to execute.

## File-Structure

The file structure of the project is as follows:

```
    tests/ contains test files
    ├── README.md
    ├── 0-promise.js
    ├── 1-promise.js
    ├── 2-then.js
    ├── 3-all.js
    ├── 4-user-promise.js
    ├── 5-photo-reject.js
    ├── 6-final-user.js
    ├── 7-load_balancer.js
    ├── 8-try.js
    ├── 9-try.js
    └── 100-await.js
```
Each JavaScript file contains the implementation of a specific task.

## Testing

Tests for each task can be found in their respective `main.js` files. To run the tests, execute the `npm run dev` command followed by the `filename` of the main file you want to test. For example:

```
npm run dev 0-main.js

```

This will execute the test script for the first task.

## Contributing

Contributions to this repository are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## Author
[ifeanyi kalu](github.com/fazzy12)