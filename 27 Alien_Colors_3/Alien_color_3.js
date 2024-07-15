"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Version 1 of the program.
let alienColors = "green";
//If the alien is green, print a message that the player earned 5 points.
if (alienColors === "green") {
    console.log("Version 1: The player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("The player earned 15 points.");
}
else {
    "Please select one color";
}
;
// Version 2 of the program.
alienColors = "yellow";
// If the alien is yellow, print a message that the player earned 10 points.
if (alienColors === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: The player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("The player earned 15 points.");
}
else {
    "Please select one color";
}
;
// Version 3 of the program.
alienColors = "red";
//If the alien is red, print a message that the player earned 15 points.
if (alienColors === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Version 3: The player earned 15 points.");
}
else {
    "Please select one color";
}
;
