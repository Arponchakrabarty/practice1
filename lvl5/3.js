// Find the GCD of two numbers.
 let a= 60
 let b= 80
    let gcd
    let largest
    let smallest 

if(a<b){
    largest=b 
    smallest= a 
}
else {
   largest =a 
   smallest=b 
}

 for(let i=1; 1; i++){
    let modulas= largest% smallest
    if(modulas===0){
        gcd= smallest
        break
    }
    else{
        largest = smallest
        smallest= modulas
        }
 }
 console.log(gcd);