// LEVEL 1
// Exercice 1
// Convert this functions into arrow functions:

//Ex 1.1
function multiply(num1, num2) {
   return num1 * num2;
}

//Ex 1.2
function toCelsius(fahrenheit) {
   return (5/9) * (fahrenheit-32);
}

//Ex 1.3
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 } 

//Ex 1.4
function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} 

//Ex 1.5
function greet(who) {
    console.log("Hello " + who);
}
