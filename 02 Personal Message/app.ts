 let personalmessage : string  ;

 personalmessage = prompt("what is your name ?")  || '' ;

 if(personalmessage !== null && personalmessage !== ''){
    alert(`Hello ${personalmessage} would you like to learn some Python today?`)
 }
else{
    alert(" please enter your name first")
}