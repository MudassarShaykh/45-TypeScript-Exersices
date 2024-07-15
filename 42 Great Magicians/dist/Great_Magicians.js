"use strict";
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
let magiciansNames = ["Teller", "David Blaine", "Dynamo", "Harry Potter"];
function make_great(magiciansArray) {
    for (let m = 0; m < magiciansArray.length; m++) {
        magiciansNames[m] = "The great " + magiciansArray[m];
    }
}
function show_magicians(magician) {
    for (let show of magician) {
        console.log(show);
    }
}
;
make_great(magiciansNames);
show_magicians(magiciansNames);
