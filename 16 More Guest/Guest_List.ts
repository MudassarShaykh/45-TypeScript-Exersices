
let invite_list: string[] =
    
    ["Kamran Tessori,","Daniyal Nagori,","Zia Khan,"];

let Message:string = 

    '  \n\tIt is our pleasure to invite you in our dinner party.\n\t  Thank You!\n\n';


// for ( let i=0; i<invite_list.length; i++ ){

//     console.log('Mr.'+invite_list[i] + Message)

// } 

let absent_guest = 'Daniyal Nagori';

let new_guest : string = 'Nawaz Sharif';

invite_list[1] = new_guest;

for ( let i=0; i<invite_list.length; i++ ){

    console.log('Mr.'+invite_list[i] + Message)

} 

console.log( "  \tMr." +`${absent_guest}`+ " is not coming in our dinner party.\n ");

console.log(' Good News! We just found a bigger table , So we are inviting 3 more guests.`\n');

invite_list.unshift('Maryam Nawaz');
invite_list.splice(2 , 0 , "Imran Khan ");
invite_list.push('Bilawal Bhutto Zardari');

for ( let i=0; i<invite_list.length; i++ ){

    console.log('Mr.'+invite_list[i] + Message)

} 