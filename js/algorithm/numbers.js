/**
 * Math.floor - rounds down to nearest integer
 * Math.round - rounds to nearest integer
 * Math.ceil - rounds up to nearest integer
 */
function isPrimeFirstSolution(n) {
    if (n <= 1) {
        return false;
    }

    for (let i=2; i<n; i++) {
        if (n%i === 0) return false;
    }

    return true;
}
// the time complexity for this will be O(n);

/**
 * Second solution for isPrime
 */
const isPrimeSecondSolution = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n%2 === 0 || n%3 === 0) return false;

    for (let i=5; i*i<=n; i=i+6) {
        if (n%i === 0 || n%(i+2) === 0) return false
    }

    return true;
}
// for this the time complexity will be squreRoot of n O(sqrt(n))
