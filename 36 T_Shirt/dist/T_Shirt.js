"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
make_shirt(`large`, `Programmer`);
make_shirt(`Xlarge`, `Coding World`);
make_shirt(`Small`, `Hello world`);