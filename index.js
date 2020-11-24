// Import npm packages
const prompt = require('prompt-sync')();
// Generates a random number
const random = Math.floor(Math.random() * 101);

// If true then a user has won the game
let win = false;

// The description of the game
console.log("Guess a randomly generated number that is between 1 and 100.");

// Lasts until a user has guessed the random number
while (win == false) {
    // Asks a user a number
    const userInput = prompt("Your guess: ");

    // If the guessed number was too low
    if (userInput > random) {
        console.log("The number is lower");
    // If the guessed number was too high
    } else if (userInput < random) {
        console.log("The number is higher");
    // If the guessed number was correct
    } else if (userInput == random) {
        console.log("Correct! Thank you for playing!");
        win = true;
    // Ends the game If the user types 'exit'
    } else if (userInput === "exit") {
        console.log("Better luck next time! The number was " + random);
        break;
    }
}