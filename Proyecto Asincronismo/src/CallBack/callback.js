// Particularidades que tiene un callback 

// Function sumar

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2, 2, sum));

// setTimeOut
setTimeout(function (){
    console.log('Hola Js');
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
}
