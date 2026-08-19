//  Print the Fibonacci series up to n terms.
let lastNum= 1
let fibonacci= 0
let temp = 0

for(let i=0; i<=5;i++){
    console.log(fibonacci);
    temp = fibonacci
    fibonacci= fibonacci+lastNum
    lastNum=temp
}