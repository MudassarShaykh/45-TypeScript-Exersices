"use strict";
let invite_list = ["Kamran Tessori,", "Daniyal Nagori,", "Zia Khan,"];
let Message = '  \n\tIt is our pleasure to invite you in our dinner party.\n\t  Thank You!';
for (let i = 0; i < invite_list.length; i++) {
    console.log('Mr.' + invite_list[i] + Message);
}
