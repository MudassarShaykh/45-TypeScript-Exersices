"use strict";
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";
// Write an if statement to test whether the alien’s color is green.
if (alien_color === "green") {
    //print a message that the player just earned 5 points.
    console.log("player just earned 5 points.");
}
//if test and another that fails. (The version that fails will have no output.)
alien_color = "yellow";
if (alien_color === "green") {
    console.log("player just earned 5 points.");
}
