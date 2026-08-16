// Find the product of the digits of a number


var num=954
strNum= num.toFixed()
var firstStr= strNum[0]
var secondStr=strNum[1]
var thirdStr=strNum[2]

var final= parseInt(firstStr)*parseInt(secondStr)*parseInt(thirdStr)
console.log(final);