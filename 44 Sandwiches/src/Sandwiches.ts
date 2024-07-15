// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orders(summary:string[]){

    console.log("\nMaking your sandwich with: ");

    summary.forEach( ingredients => console.log("-" + ingredients));

    console.log("Enjoy your sandwich ! \n")

}

orders(['Cheese', 'Ham', 'tomato']);

orders(['Chocalate', 'Butter', 'Jelly']);

orders(['lettuce', 'Onion']);