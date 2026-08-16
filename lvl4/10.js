// Find the sum of all digits of a number.


var num= 951
var strNum= num.toFixed()
var firstStr= `${strNum[0]}`
var secondStr= `${strNum[1]}`
var thirdStr= `${strNum[2]}`
var final= parseInt(firstStr)+parseInt(secondStr)+parseInt(thirdStr)
console.log(final);