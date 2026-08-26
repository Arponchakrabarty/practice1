// Check whether a number is Prime.

//    let num=50

// let primeNum=true

// for(let i=num; i>0; i--){
//     if(i==num || i==1 ) continue
    
//     if(num<0) {
//         console.log("number must be positive ");
//         continue
//     }
//     if (num%i === 0 ) {
//         primeNum= false
//         continue
//     }
//     primeNum=true
// }
// console.log(num,primeNum ?" is a prime number":" is not a prime number");


let num= 20
let primeNum= true

for(let i= num; i>0;i-- ){
    if(i==num || i==1) continue

    if(num<0){
        console.log("num must be positive");
        continue
    } 

    if(num%i ===0 ) {
        primeNum= false
        continue
    } 
    primeNum=true
}
console.log(num,primeNum ?" is a prime number":" is not a prime number");