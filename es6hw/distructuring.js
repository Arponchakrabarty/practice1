let age= {
    arpon:17,
    rahul:23,
    rikta:39,
    shomor:50
}
device= {mobile:90000,
    laptop:180000,
    bike:200000,
    car:1000000,
    house:5000000
}
// let {arpon:aaaa,...others}=age 
// console.log(aaaa);

// const devide=["car", "bike", "phn"]
// const info= ["arpon","17"]
// const all=[...devide,...info]
// // console.log(all);
// // const [second,...first]=devide
// // console.log(first);


// let device= ["phn","laptop", "bike"]
let info=["arpon", 17]
let all= [...info]
console.log(all);


let need={
    name: "arpon",
    ...device
} 
console.log(need);