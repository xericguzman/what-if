const prompt = require('prompt-sync')();

const number1 = prompt('Enter a number here: ');

console.log(number1);

const number2 = 15;

if (number1 % 3 === 0){
    console.log('fizz');
}

if (number1 % 5 === 0){
    console.log('buzz');
}

if (number1 % 15 === 0){
    console.log('fizzbuzz')
}