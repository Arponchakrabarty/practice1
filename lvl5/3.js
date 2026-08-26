// Find the GCD of two numbers.
 let a= 15
 let b= 25
 let extra

 for(let i=1; i<2 ; i++){
    let A= b%a 
    extra= A
    if (a%extra===0){
        console.log(extra);
    }
    else{
        console.log(A);
    }
 }