const device= {mobile:90000,
    laptop:180000,
    bike:200000,
    car:1000000,
    house:5000000
}


const need= {
    name:"arpon",
    ...device
}
console.log(need);

// const devide=["car", "bike", "phn"]
// const info= ["arpon","17"]
// const all=[...devide,...info]
// // console.log(all);
// // const [second,...first]=devide
// // console.log(first);
const devide=["car", "bike", "phn","tablet"]
const info= ["arpon","17"]

// console.log(all);
const [second, third,...first]=devide
console.log(first);
const all=[...first]
console.log(all);
