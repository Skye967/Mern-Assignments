const cars = [ 'Tesla', 'Mercedes', 'Honda' ]
const [ randomCar ] = cars
const [ , otherRandomCar ] = cars
//Predict the output
console.log( randomCar ) // output = 'Tesla'
console.log( otherRandomCar ); // output = 'Mercedes'


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {
    name: otherName
} = employee;
//Predict the output
//console.log( name );// error
console.log( otherName ); // output = 'Elon'


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {
    password: hashedPassword
} = person;
//Predict the output
console.log( password ); // output of global variable
console.log( hashedPassword ); // error: no password in person object


const numbers = [ 8, 2, 3, 5, 6, 1, 67, 12, 2 ];
const [ , first ] = numbers;
const [ , , , second ] = numbers;
const [ , , , , , , , , third ] = numbers;
//Predict the output
console.log( first == second ); // output = 5/answer: false
console.log( first == third ); // output= 2/answer: true


const lastTest = {
    key: 'value',
    secondKey: [ 1, 5, 1, 8, 3, 3 ]
}
const {
    key
} = lastTest;
const {
    secondKey
} = lastTest;
const [ , willThisWork ] = secondKey;
//Predict the output
console.log( key ); // output = 'value'
console.log( secondKey ); // output = array
console.log( secondKey[ 0 ] ); // output = 1
console.log( willThisWork ); //  error/ answer: 5 