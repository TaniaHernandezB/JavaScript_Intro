// Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form.

var x= prompt("What is the first number?");
var y= prompt("What is the second number?");

var num1= parseInt(x);
var num2 = parseInt(y);

var userNeed = prompt("Choose to either add(+), subtract(-), multiply(*), or divide(/) the two numbers")

if (userNeed == "add"){
    console.log(`${num1} + ${num2} = ${num1+=num2}`)
}
else if (userNeed == "subtract"){
    console.log(`${num1} - ${num2} = ${num1-num2}`)
}
else if (userNeed == "multiply"){
    console.log(`${num1} * ${num2} = ${num1*num2}`)
}
else if (userNeed == "divide"){
    console.log(`${num1} / ${num2} = ${num1/num2}`)
}