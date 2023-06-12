const mysql = require('mysql2');

const sanitizeInput = (input) => {
    const connection = mysql.createConnection({ multipleStatements: true });
    return connection.escape(input);
}

// Function to validate and sanitize user input
const validateAndSanitizeInput = (input) => {
    // Implement your validation and sanitization logic here
    // Ensure input adheres to the expected format and is safe for database operations
    // You can use libraries like validator.js for validation and sqlstring for sanitization
    // Here's a simple example using regex to validate and escape the input:
    const safeInput = input.replace(/[^\w\s]/gi, ''); // Remove special characters

    return safeInput;
}
/*
    use: [[1], [2], [[3], [4], [5]], [[6], [7], [8]]];
    to  [1, 2, 3, 4, 5, 6, 7, 8]
*/
const flattenArray = (nestedArray) => {
    let flattenedArray = [];

    for (const item of nestedArray) {
        if (Array.isArray(item)) {
            flattenedArray = flattenedArray.concat(flattenArray(item));
        } else {
            flattenedArray.push(item);
        }
    }

    return flattenedArray;
}



module.exports = {
    validateAndSanitizeInput,
    sanitizeInput,
    flattenArray
}