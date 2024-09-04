function isPrimaryNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimeNumbers() {
    for (let nbr = 2; nbr <= 100; nbr++){
        if(isPrimaryNumber(nbr)){
            console.log(nbr);
        }
    }
}
const t0 = performance.now();
countPrimeNumbers()
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds`);