function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function increment(n){
    return n += 1;
}

function decrement(n){
    return n -= 1;
}

function makeInt(x){
    return parseInt(x,10)
}

function preserveDecimal(y){
    return parseFloat(y)
}

console.log(preserveDecimal("27.86"))