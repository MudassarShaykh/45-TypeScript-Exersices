 let namecases : string = '' ; 

 namecases = prompt("What is your name?") || '' ; 

 let lowercase : string = namecases.toLowerCase();
let  uppercase : string = namecases.toUpperCase();
let  titlecase : string = namecases.split(' ').map( word => word .charAt(0).toUpperCase()
 +word .slice(1) .toLowerCase()) .join(' ')

 if(namecases !== null && namecases !== ''){
    alert(`Hi ! ${namecases} here are your name 
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    Titlecase: ${titlecase}`)
 
 }
 else{
    alert(`First Please enter your name`)
 }