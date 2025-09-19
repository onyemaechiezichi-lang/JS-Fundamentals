const { argv } = require('node:process');

// Access the first argument
const firstArg = argv[2];

// Check if the first argument is a number
if (firstArg === undefined) {
    console.log('Not a number');
} else if (!isNaN(Number(firstArg))) {
    console.log('My number:', Number(firstArg));
} else {
    console.log('Not a number');
};