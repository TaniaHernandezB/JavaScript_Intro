// Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form.

var num1= prompt("What is the first number?");
var num2= prompt("What is the second number?");

var userNeed = prompt("Choose to either add(+), subtract(-), multiply(*), or divide(/) the two numbers")

if (userNeed == "add"){
    console.log(num1+=num2)
}
else if (userNeed == "subtract"){
    console.log(num1-num2)
}
else if (userNeed == "multiply"){
    console.log(num1*num2)
}
else if (userNeed == "divide"){
    console.log(num1/num2)
}