// normal way of defining a function

function multiply_by_2(n) {
    return n * 2
}

console.log(`Value of 2 multiplied by 2 = ${multiply_by_2(2)}\n`)

// anon functions

/* we decomse the traditional way of defining a function as follows:
    - Remove the word "function" and place arrow between the argument and opening body brace
    - Remove the body braces and word "return" — the return is implied.
    - Remove paranthesis
*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Value of 2 multiplied by 2 = ${numbers.map(n => n * 2)}\n`)

/* have to include paranthesis if the function takes 
    - no parameters 
    - or has multiple parameters
*/

// Traditional anonymous function
// (function (a, b) {
//     return a + b + 100;
//   });
  
//   // Arrow function
//   (a, b) => a + b + 100;
  
//   const a = 4;
//   const b = 2;
  
//   // Traditional anonymous function (no parameters)
//   (function () {
//     return a + b + 100;
//   });
  
//   // Arrow function (no parameters)
//   () => a + b + 100;
  
/* we can only remove braces if no further lines of processing is required.
    meaning that we can only remove braces if the function only returns a single expression with no further help
*/

// Traditional anonymous function
// (function (a, b) {
//     const chuck = 42;
//     return a + b + chuck;
//   });
  
//   // Arrow function
//   (a, b) => {
//     const chuck = 42;
//     return a + b + chuck;   *** also must specify where you want to return the function if there are other lines ***
//   };


// finding the max of two numbers

a = 10
b = 15

result = (a, b) => a > b ? a : b;
console.log(result(a, b)); // output will be 15

// sum all elements of an array

nums = [5, 10, 30, 48]

result = nums.reduce((a, b) => a + b)
console.log(result)

// find even numbers in array

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = numbers.filter(n => n % 2 == 0)
console.log(result)

const words = "This is a sentence, wow it's so cool";
const wordArray = words.split(" ");

result = wordArray.filter((word) => {
    switch (word.toLowerCase()[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
});

console.log(result); // output will be ["is", "a", "it's", "out"]
