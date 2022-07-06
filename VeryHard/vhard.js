// Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
function add(a, b){
    return a+b;
}

function subtract(a, b){
   return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
var userW = prompt("add, subtract, multiply, or divide?");
var num1 = parseFloat(prompt("First number?"));
var num2 = parseFloat(prompt("Second number?"));

if (userW == "add"){
    result = add(num1, num2);
    console.log(`${num1} + ${num2} =` + result);
}
if (userW == "subtract"){
    result = subtract(num1, num2);
    console.log(`${num1} - ${num2} =` + result)
}
if (userW == "multiply"){
    result = multiply(num1, num2);
    console.log(`${num1} * ${num2} =` + result)
}
if (userW == "divide"){
    result = divide(num1, num2);
    console.log(`${num1} / ${num2} =` + result)
}

// another way of doing it :
// var x= prompt("What is the first number?");
// var y= prompt("What is the second number?");

// var num1= parseInt(x);
// var num2 = parseInt(y);

// var userNeed = prompt("Choose to either add(+), subtract(-), multiply(*), or divide(/) the two numbers")

// if (userNeed == "add"){
//     console.log(`${num1} + ${num2} = ${num1+=num2}`)
// }
// else if (userNeed == "subtract"){
//     console.log(`${num1} - ${num2} = ${num1-num2}`)
// }
// else if (userNeed == "multiply"){
//     console.log(`${num1} * ${num2} = ${num1*num2}`)
// }
// else if (userNeed == "divide"){
//     console.log(`${num1} / ${num2} = ${num1/num2}`)
// }
