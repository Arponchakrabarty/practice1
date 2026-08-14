// Check whether a number is a palindrome (e.g., 121).

var num = 454
var strNum = num.toFixed()
console.log(strNum.length);
var strReverse= `${strNum[2]}${strNum[1]}${strNum[0]}`
var final= parseInt(strReverse)
console.log(final);


if(final===num){
    console.log("the num is a palindrome");
}
else{
    console.log("the num is not a palindrome");
}