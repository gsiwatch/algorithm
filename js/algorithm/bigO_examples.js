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

/**
 * Adding some more reading to it
 *      Big O notation: 
 *      some math: 
 *        The need for this: why we care about it
 *        what is time complexity
 *        what is space complexity
 *           
 */

// exercise add n numbers 
const addNumbers = (n) => {
    let total = 0;
    for(let i=0; i<=n; i++) {
        total += i;
    }
    return total;
}
// time complexity for this is O(n)

// another solution of adding the numbers
const addNumbersSecondWay = (n) => {
    return n * (n + 1)/2;
    /**
     * write the explanation here 
     */
}
// for this time complexity will be O(k) where k is a constant

/**
 * what does better actually means?
 *     1. is it how faster the code is
 *     2. is about the code takes less memory
 *     3. is the code more readable
 */
