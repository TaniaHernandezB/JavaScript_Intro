// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// gives user the two numbers and only allows user to choose math function
// var num1= 20;
// var num2= 5;

// var math;
// var userNeed = prompt("Choose to either add, subtract, multiply, or divide the two numbers -> 20 and 5")

// if (userNeed == "add"){
//     console.log(num1+=num2)
// }
// else if (userNeed == "subtract"){
//     console.log(num1-num2)
// }
// else if (userNeed == "multiply"){
//     console.log(num1*num2)
// }
// else if (userNeed == "divide"){
//     console.log(num1/num2)
// }

// code below has same functionality as code above but gives user the ability to choose the two numbers
var x= prompt("What is the first number?");
var y= prompt("What is the second number?");

var num1= parseInt(x);
var num2 = parseInt(y);

var userNeed = prompt("Choose to either add, subtract, multiply, or divide the two numbers")

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