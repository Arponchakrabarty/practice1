// Reverse a number.

var num= 456
var strNum= num.toFixed()
var strReverse= `${strNum[2]}${strNum[1]}${strNum[0]}`
var finalReverse= parseInt(strReverse)
console.log(finalReverse);