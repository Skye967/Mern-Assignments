console.log( hello ); // error undefined
var hello = 'world'; //defining variable

var needle = 'haystack';
test(); // calling function before it has been defined.
function test() { // creating new function, hoisted up to where the function is called
    var needle = 'magnet'; // creating local variable with the same name as global variable, no errors.
    console.log( needle ); // calling local variable
}


var brendan = 'super cool'; // defining variable
function print() { // creating function
    brendan = 'only okay'; //changing output of global variable if called, not permenant
    console.log( brendan ); // calling local variable
}
console.log( brendan ); // calling global variable


var food = 'chicken'; // defining global variable
console.log( food ); // calling global variable
eat(); // calling and hoisting up function
function eat() { // creating function
    food = 'half-chicken'; // changing global to a local variable and changing output
    console.log( food ); // calling local variable
    var food = 'gone'; // creating a local variable with the same name but never called or returned
}
console.log( food ); // calling global variable


mean(); // mean is not a function error
console.log( food ); // calling global function
var mean = function () { // creating variable with function
    food = "chicken"; // changing global variable to local variable and changing output
    console.log( food ); // calling local variable
    var food = "fish"; // overwriting local variable with another local variable with same name
    console.log( food ); // calling local variable
}
console.log( food ); // calling local variable


console.log( genre ); // error: variable undefined
var genre = "disco"; // difining variable
rewind(); // calling and hoisting function;
function rewind() { // creating function
    genre = "rock"; // changing global variable to local variable and changing output
    console.log( genre ); // calling local variable
    var genre = "r&b"; // overwriting local variable
    console.log( genre ); // calling local variable
}
console.log( genre ); // calling global variable


dojo = "san jose"; // ignores invalid sytax
console.log( dojo ); // calls global variable
learn(); // hoisting function
function learn() { // creating function
    dojo = "seattle"; //changing global variable to local variable and changing output
    console.log( dojo ); // calling local variable
    var dojo = "burbank"; // overwriting local variable
    console.log( dojo ); // calling local variable
}
console.log( dojo ); // error again


console.log( makeDojo( "Chicago", 65 ) ); // hoisting function
console.log( makeDojo( "Berkeley", 0 ) ); // hoisting function
function makeDojo( name, students ) { // creating function
    const dojo = {}; // creating unchangable object
    dojo.name = name; // creating key and value
    dojo.students = students; // creating key and value
    if ( dojo.students > 50 ) { // if condition true
        dojo.hiring = true; // create key and value
    } else if ( dojo.students <= 0 ) {
        closed = "closed for now"; // error unchangable variable
        return closed;
    }
    return dojo; // return local variable
}