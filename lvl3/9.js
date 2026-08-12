// 9. Calculate electricity bill:
// * First 100 units → 5 Tk/unit
// * Next 100 units → 7 Tk/unit
// * Above 200 units → 10 Tk/unit

var unitUsed = 550

var first= 100*5;
var sec = 100*7;
var third= 350*10;

var total = first + sec + third
console.log(total)