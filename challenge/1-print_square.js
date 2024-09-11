#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


const size = parseInt(process.argv[2], 10);

if (isNaN(size) || size <= 0) {
    console.error("Missing argument\nUsage: ./1-print_square.js <size>\nExample: ./1-print_square.js 8");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    console.log("#".repeat(size));
}
