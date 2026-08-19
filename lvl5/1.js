// Check whether a number is Prime.



for(let j=1; j<=100; j++ ){
    let num=j

let primeNum=true

for(let i=num; i>0; i--){
    if(i==num || i==1 ) continue
    
    if(num<0) {
        console.log("number must be positive ");
        continue
    }
    if (num%i === 0 ) {
        primeNum= false
        continue
    }
    primeNum=true
}
console.log(num,primeNum ?"this is prime number":"this is not a prime number");

}