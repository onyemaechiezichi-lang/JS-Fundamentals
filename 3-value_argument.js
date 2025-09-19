const { argv } = require('node:process');
// Check if there are arguments passed
if (argv[2] === undefined) {
    console.log('No argument');
} else {
    console.log(argv[2]);
};