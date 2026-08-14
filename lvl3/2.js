// Find the last digit of a number.


var num= 1549845645
var strNum =num.toFixed()
console.log(strNum.length); 
var lstNum = `${strNum[9]}`
var final = parseInt(lstNum)
console.log(final);
