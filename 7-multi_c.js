const { argv } = require('node:process');

let word = 'C is fun';
let firstDigit = argv[2];

// Check if there are enough arguments
if (argv.length < 3) {
    console.log('Missing number of occurrences');
    process.exit(1); // Exit the process with a non-zero status
}

// Check if the first argument is a number
if (!isNaN(Number(firstDigit))) {
    for (let i = 0; i < Number(firstDigit); i++) {
        console.log(word);
    }
} else {
    console.log('Missing number of occurrences');
};