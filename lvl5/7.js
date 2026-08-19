// Find the largest element in an array.

let num= [10,50,70,90]
let largestNum

if(num[0]<num[1]){
 largestNum=num[1]
}
else{
    largestNum=num[0]
}

if(largestNum<num[2]){
    largestNum=num[2]
}
else{
    largestNum=largestNum
}
if(largestNum<num[3]){
    largestNum=num[3]
}
else{
    largestNum=largestNum
}
console.log(largestNum);
