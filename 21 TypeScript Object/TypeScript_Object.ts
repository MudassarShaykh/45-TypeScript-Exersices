
//  Write a program that creates Objects containing these items.

// Datatype of student_id object
interface person {
    Age: number,
    Name: string,
    Nationality: string,
    Student: boolean,
}
// student_id object
let Student_id:person = {

    Age : 17,
    Name : 'Mudassar',
    Nationality : 'Pakistani',
    Student : true,
}
// Print Student_id object
console.log(Student_id)


// Datatype of car object
interface Car {

    Brand : string,
    Color : string,
    Automatic : boolean,
    Yearofmanufacture : number,
}
// Car object 
let car:Car = {
    Brand : 'Toyota',
    Color: 'White',
    Automatic: true,
    Yearofmanufacture: 2023,
}
// Print Car object
console.log(car);