/**
 * Excercises: 
 *    Calculate the time complexities for each of the exercise code snippet
 */
// first

const someFunc = (n) => {
    for (let i=0; i<n*1000; i++) { // O(1000n)
        for (let j=0; j<n*20; j++) { // O(20n)
            console.log(i+j);        
        }
    }
}
// total time complexity = O(20n^2); hence O(n2)

// exercise 2
const someFunc = (n) => {
    for (let i=0; i<n; i++) { // O(n)
        for (let j=0; j<n; j++) { // O(n)
            for (let k=0; k<n; k++) { // O(n)
                for (let l=0; l<10; l++) { // constant 10
                    console.log(i+j+k+l);
                }
            }
        }
    }
}
// total O(n^3)


// exercise 3
const someFunc = (n) => {
    for(let i=0; i<1000, i++) {
        console.log('hi');
    }
}
// Answer operations will not change based on input; therefore O(1)

// exercise 4
const someFunc = (n) => {
    for (i=0; i<n*10; i++) {
        console.log(n);
    }
}
// Answer O(10n); therefore because of coefficient rule it is O(n)

// exercise 5
const someFunc = (n) => {
    for (let i=0; i<n; i*2) {
        console.log(n);
    }
}
// Answer: it is going to take lesser time than O(n) but more than a constant therefor Olog2(n)

// exercise 6
const someFunc = (n) => { // this is infinite loop
    while(true) {
        console.log(n);
    }
}
// therefore O(infinite);
