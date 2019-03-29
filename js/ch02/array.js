let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// iterating forward
for (let i=0; i<daysOfWeek.length; i++) {
    // this will output sunday, monday and so on ..
    console.log(daysOfWeek[i]);
}

// iterating backwards
for (let i=daysOfWeek.length - 1; i>=0; i--) {
    console.log(daysOfWeek[i]);
}

// fibonacci sequence
// first 20 numbers

let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i=3; i<20; i++) { // array will have value
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (let i=1; i<fibonacci.length; i++) {
    console.log(fibonacci[i]);
}