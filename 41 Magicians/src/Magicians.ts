// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array

let magiciansNames:string[] = ["Teller", "David Blaine", "Dynamo", "Harry Potter"];

function show_magicians(magician:string[]){

    for(let show of magician){
        console.log(show);
    }

};

show_magicians(magiciansNames);