
//Tests for equality with strings.
console.log( "Equality test with string:","Chemistry" === "Chemistry");

//Tests for inequality with strings.
console.log( "Inequality test with string:", ("Chemitry" as string) != "Physics");

//Tests using the lower case function.
console.log("Lower case function test:","MATHAMETICS".toLocaleLowerCase() === "mathametics");

// Numerical tests involving equality.
console.log("Equality test with numbers ", 26 === 26);

// Numerical tests involving inequality.
console.log("Equality test with numbers ", (26 as number) != 17);

//Numerical tests involving greater than.
console.log("Greater than test with numbers:", 145 > 143);

//Numerical tests involving less than.
console.log("Less than test with numbers:" , 144 < 146);

//Numerical tests involving greater than or equal to.
console.log("Greater than or equal to test: ", 145 >= 145);

//Numerical tests involving Less than or equal to.
console.log("Greater than or equal to test: ", 140 <= 145);

//Tests using "and" operator.
console.log("And operator test: ", 4 === 4 && 8 > 4 );

//Tests using "or" operator.
console.log("Or operator test: ",  16 > 35 || 7 < 15 );

//Test whether an item is in the array.
const car:string[] = ["Ferrari", "Lamborghini", "Porsche"];
console.log("Test 'Lambotghini' in the array: ",car.includes("Lamborghini"));

//Test whether an item is not in the array.
console.log("Test 'Corolla' is not in the array:", !car.includes("Corolla") );