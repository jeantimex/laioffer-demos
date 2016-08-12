// main.js
var greetings = require("./greetings.js");
var calculator = require("./calculator.js");

/*
// equivalent
var greetings = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },
       
  sayHelloInSpanish: function() {
    return "Hola";
  }
};
*/

console.log(calculator(1, 2));

// "Hello"
console.log(greetings.sayHelloInEnglish());

// "Hola"  
console.log(greetings.sayHelloInSpanish());
