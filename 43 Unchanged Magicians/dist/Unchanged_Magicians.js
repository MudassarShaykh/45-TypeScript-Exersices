"use strict";
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magiciansNames = ["Teller", "David Blaine", "Dynamo", "Harry Potter"];
function copyAarry(copy_array) {
    return [...copy_array];
}
function make_great(magiciansArray) {
    for (let m = 0; m < magiciansArray.length; m++) {
        magiciansArray[m] = "The great " + magiciansArray[m];
    }
}
function show_magicians(magician) {
    for (let show of magician) {
        console.log(show);
    }
}
;
const copymagicianArray = copyAarry(magiciansNames);
make_great(copymagicianArray);
console.log("\n\nThis is my original array");
show_magicians(magiciansNames);
console.log("\n\nThis is my modified or copy of the array");
show_magicians(copymagicianArray);
