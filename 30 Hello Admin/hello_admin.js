"use strict";
const userName = ["Admin", "Mudassar", "Yousuf", "Ibraheem", "Taha", "Aslam"];
for (let u = 0; u < userName.length; u++) {
    if (userName[u] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[u]}, thank you for logging in again.`);
    }
}
