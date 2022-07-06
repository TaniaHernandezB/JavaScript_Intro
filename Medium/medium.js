// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally
var userW = prompt("Type something either in all caps, lowercase, or neither");
var answer;

if (userW == userW.toUpperCase()){
    console.log(`User is shouting!`)
}
else if (userW == userW.toLowerCase()){
    console.log(`User is whispering.`)
}
else{
    console.log(`User is talking normally`)
}