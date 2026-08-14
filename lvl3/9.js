// 9. Calculate electricity bill:
// * First 100 units → 5 Tk/unit
// * Next 100 units → 7 Tk/unit
// * Above 200 units → 10 Tk/unit

// var unit = 201
// var unitUsed
// if(unit<=100 && unit> 0){
//     unitUsed= unit*5
// }

// else if (unit>100 && unit<=200 && unit> 0){
//     unitUsed= 100*5 
//     unitUsed += ((unit-100)*7)
// }
// else if(unit>200 && unit> 0){
//     unitUsed= 100*5
//     unitUsed +=100*7
//     unitUsed +=(unit-200)*10
// }
// else{
//     console.log("not eligible");
// }
// console.log("total used: ", unitUsed);


var unit = 504
var unitUsed

if(unit>0 && unit>=100){
    unitUsed = 100*5
}
else if(unit<=200 && unit>0){
    unitUsed=100*5
    unitUsed += ((unit-100)*7)
}
else if(unit>200){
    unitUsed=100*5
    unitUsed += ((unit-100)*7)
    unitUsed += (unit-200)*10
}
else{
    console.log("not eligible");
}
console.log("total used:",unitUsed);