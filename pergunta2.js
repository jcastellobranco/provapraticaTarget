function addElementFibonacciSequence(fibonacci){
    let fibonacciLength = fibonacci.length
    let nextElement = fibonacci[fibonacciLength-1] + fibonacci[fibonacciLength -2]

    fibonacci.push(nextElement)

    return fibonacci

}

function getFibonacciLastElement(fibonacci){

    return fibonacci.slice(-1)
}

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

const choosednumber = 14;
let lastElement = getFibonacciLastElement(fibonacci)

while(choosednumber> lastElement){
    fibonacci = addElementFibonacciSequence(fibonacci)
    lastElement = getFibonacciLastElement(fibonacci)
}

lastElement == choosednumber ? console.log('O número pertence a sequencia de Fibonacci') : console.log('O número não pertence a sequencia de Fibonacci') 


