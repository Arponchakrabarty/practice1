const device= {mobile:90000,
    laptop:180000,
    bike:200000,
    car:1000000,
    house:5000000
}
const { laptop:ke,mobile, }= device
console.log(ke);

const need= {
    name:"arpon",
    ...device
}
// console.log(need);

const devide=["car", "bike", "phn"]
const info= ["arpon","17"]
const all=[...devide,...info]
// console.log(all);
// const [second,...first]=devide
// console.log(first);