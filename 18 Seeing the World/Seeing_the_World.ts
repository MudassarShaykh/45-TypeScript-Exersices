
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places: string[] = [' Dubai ',' Makkah ',' Eifel Tower ',' Times Squre ', ' London '];

// Print your array in its original order.
console.log(' Orignal: ' + places + '\n');

// Print your array in alphabetical order without modifying the actual list.
console.log(' Copy: ' + [...places].sort()+'\n');

//Show that your array is still in its original order by printing it.
console.log(' Orignal: ' + places + '\n');

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(' Copy: ' + [...places].sort().reverse()+'\n');

// Show that your array is still in its original order by printing it again.
console.log(' Orignal: ' + places + '\n');

// Reverse the order of your list. Print the array to show that its order has changed.
console.log( ' Orignal: '+ places.reverse() + '\n');

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(' Orignal: ' + places.reverse() + '\n');

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(' Orignal: ' + places.sort() + '\n');

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(' Orignal: ' + places.sort().reverse() + '\n');

