// alert('Info: Testing connection .. ');

console.log('INFO: Testing Connection ... ');

// practice variables

let myVariable = 'global';
let myOtherVariable = 'global';

function myFunction() {
    myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());

console.log(myOtherVariable);
console.log(myOtherFunction());
