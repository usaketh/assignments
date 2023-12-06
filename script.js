function calculateArithmetic(a, b, arrFunc){
    return arrFunc(a, b);
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);
