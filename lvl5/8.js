// Find the smallest element in an array.

let num= [15,27,80,58]
let smallestNum

if(num[0]<num[1]){
    smallestNum=num[0]
}
else{
    smallestNum=num[1]
}

if(smallestNum<num[2]){
    smallestNum=smallestNum
}
else{
    smallestNum=num[2]
}
if(smallestNum<num[3]){
    smallestNum=smallestNum
}
else{
    smallestNum=num[3]
}
console.log(smallestNum);