"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
let magiciansNames = ["Teller", "David Blaine", "Dynamo", "Harry Potter"];
function show_magicians(magician) {
    for (let element of magician) {
        console.log(element);
    }
}
show_magicians(magiciansNames);
