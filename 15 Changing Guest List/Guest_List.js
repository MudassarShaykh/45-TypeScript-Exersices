"use strict";
let invite_list = ["Kamran Tessori,", "Daniyal Nagori,", "Zia Khan,"];
let Message = '  \n\tIt is our pleasure to invite you in our dinner party.\n\t  Thank You!\n\n';
for (let i = 0; i < invite_list.length; i++) {
    console.log('Mr.' + invite_list[i] + Message);
}
let absent_guest = 'Daniyal Nagori';
let new_guest = 'Nawaz Sharif';
invite_list[1] = new_guest;
for (let i = 0; i < invite_list.length; i++) {
    console.log('Mr.' + invite_list[i] + Message);
}
console.log("  \tMr." + `${absent_guest}` + " is not coming in our dinner party.");
