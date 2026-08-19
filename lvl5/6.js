// Check whether a number is an Armstrong number.

let num=159
let strNum= num.toFixed()
let firstStr= `${strNum[0]}`
let secondStr= `${strNum[1]}`
let thirdStr= `${strNum[2]}`
let final = (firstStr**3)+(secondStr**3)+(thirdStr**3)
console.log(final);

if(final===num){
    console.log("armstrong number");
}

else{
    console.log("not a armstrong number");
}
