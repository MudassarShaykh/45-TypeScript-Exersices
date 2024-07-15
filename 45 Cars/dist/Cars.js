"use strict";
// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carsInfo(manufacturer, modelname, ...extrafeatures) {
    const dataBasa = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extrafeatures));
    return dataBasa;
}
;
let Summary = carsInfo('Toyota', 'Fortuner', { color: "White" }, { feature: ["Auto wash", "Black glass",] });
console.log(Summary);
